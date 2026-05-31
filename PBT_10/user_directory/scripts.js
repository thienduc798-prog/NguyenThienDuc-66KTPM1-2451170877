// ======================
// STATE
// ======================

let users = [];
let editingUserId = null;

// ======================
// API LAYER
// ======================

const api = {

    baseURL:
        "https://jsonplaceholder.typicode.com",

    async getUsers(){

        const response =
            await fetch(
                `${this.baseURL}/users`
            );

        if(!response.ok){
            throw new Error(
                "Không thể tải users"
            );
        }

        return response.json();
    },

    async getUser(id){

        const response =
            await fetch(
                `${this.baseURL}/users/${id}`
            );

        if(!response.ok){
            throw new Error(
                "Không tìm thấy user"
            );
        }

        return response.json();
    },

    async createUser(data){

        const response =
            await fetch(
                `${this.baseURL}/users`,
                {
                    method:"POST",

                    headers:{
                        "Content-Type":
                        "application/json"
                    },

                    body:JSON.stringify(data)
                }
            );

        if(!response.ok){
            throw new Error(
                "Tạo user thất bại"
            );
        }

        return response.json();
    },

    async updateUser(id,data){

        const response =
            await fetch(
                `${this.baseURL}/users/${id}`,
                {
                    method:"PUT",

                    headers:{
                        "Content-Type":
                        "application/json"
                    },

                    body:JSON.stringify(data)
                }
            );

        if(!response.ok){
            throw new Error(
                "Cập nhật thất bại"
            );
        }

        return response.json();
    },

    async deleteUser(id){

        const response =
            await fetch(
                `${this.baseURL}/users/${id}`,
                {
                    method:"DELETE"
                }
            );

        if(!response.ok){
            throw new Error(
                "Xóa thất bại"
            );
        }

        return true;
    }
};

// ======================
// UI LAYER
// ======================

const ui = {

    renderUsers(usersData){

        const container =
            document.getElementById(
                "usersContainer"
            );

        container.innerHTML = `
            <table>

                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>

                ${usersData.map(user=>`

                    <tr>

                        <td>${user.id}</td>

                        <td>${user.name}</td>

                        <td>${user.email}</td>

                        <td>

                            <button
                                class="edit-btn"
                                onclick="openEditModal(${user.id})">

                                Edit

                            </button>

                            <button
                                class="delete-btn"
                                onclick="deleteUser(${user.id})">

                                Delete

                            </button>

                        </td>

                    </tr>

                `).join("")}

                </tbody>

            </table>
        `;
    },

    showLoading(){

        const loading =
            document.getElementById(
                "loading"
            );

        loading.innerHTML = "";

        for(let i=0;i<5;i++){

            loading.innerHTML += `
                <div class="skeleton"></div>
            `;
        }
    },

    hideLoading(){

        document.getElementById(
            "loading"
        ).innerHTML = "";
    },

    showError(message){

        this.showToast(
            "❌ " + message
        );
    },

    showSuccess(message){

        this.showToast(
            "✅ " + message
        );
    },

    showToast(message){

        const toast =
            document.getElementById(
                "toast"
            );

        toast.className = "toast";
        toast.textContent = message;

        setTimeout(()=>{
            toast.className = "";
            toast.textContent = "";
        },3000);
    }
};

// ======================
// LOAD USERS
// ======================

async function loadUsers(){

    try{

        ui.showLoading();

        users =
            await api.getUsers();

        ui.hideLoading();

        ui.renderUsers(users);

    }
    catch(error){

        ui.showError(error.message);
    }
}

loadUsers();

// ======================
// SEARCH
// ======================

document
.getElementById("searchInput")
.addEventListener("input",(e)=>{

    const keyword =
        e.target.value.toLowerCase();

    const filtered =
        users.filter(user =>

            user.name
            .toLowerCase()
            .includes(keyword)

            ||

            user.email
            .toLowerCase()
            .includes(keyword)
        );

    ui.renderUsers(filtered);
});

// ======================
// MODAL
// ======================

function openModal(user=null){

    editingUserId =
        user ? user.id : null;

    const modal =
        document.createElement("div");

    modal.className = "modal";

    modal.innerHTML = `

        <div class="modal-content">

            <h2>

                ${
                    user
                    ? "Edit User"
                    : "Create User"
                }

            </h2>

            <input
                id="nameInput"
                placeholder="Name"
                value="${user?.name || ""}"
            >

            <input
                id="emailInput"
                placeholder="Email"
                value="${user?.email || ""}"
            >

            <button id="saveBtn">

                Save

            </button>

        </div>

    `;

    document.body.appendChild(modal);

    document
    .getElementById("saveBtn")
    .addEventListener(
        "click",
        saveUser
    );

    modal.addEventListener(
        "click",
        (e)=>{
            if(e.target===modal){
                modal.remove();
            }
        }
    );
}

// ======================
// CREATE
// ======================

document
.getElementById("addBtn")
.addEventListener(
    "click",
    ()=>openModal()
);

async function saveUser(){

    const name =
        document
        .getElementById("nameInput")
        .value;

    const email =
        document
        .getElementById("emailInput")
        .value;

    try{

        if(editingUserId){

            const updated =
                await api.updateUser(
                    editingUserId,
                    {
                        name,
                        email
                    }
                );

            users =
                users.map(user=>

                    user.id===editingUserId

                    ? {
                        ...user,
                        ...updated
                    }

                    : user
                );

            ui.showSuccess(
                "Cập nhật thành công"
            );

        }else{

            const newUser =
                await api.createUser({
                    name,
                    email
                });

            users.unshift({
                ...newUser,
                id: Date.now()
            });

            ui.showSuccess(
                "Tạo user thành công"
            );
        }

        ui.renderUsers(users);

        document
        .querySelector(".modal")
        .remove();

    }
    catch(error){

        ui.showError(error.message);
    }
}

// ======================
// UPDATE
// ======================

async function openEditModal(id){

    try{

        const user =
            await api.getUser(id);

        openModal(user);

    }
    catch(error){

        ui.showError(error.message);
    }
}

// ======================
// DELETE
// ======================

async function deleteUser(id){

    const confirmDelete =
        confirm(
            "Bạn chắc chắn muốn xóa?"
        );

    if(!confirmDelete){
        return;
    }

    try{

        await api.deleteUser(id);

        users =
            users.filter(
                user =>
                user.id !== id
            );

        ui.renderUsers(users);

        ui.showSuccess(
            "Xóa thành công"
        );

    }
    catch(error){

        ui.showError(error.message);
    }
}