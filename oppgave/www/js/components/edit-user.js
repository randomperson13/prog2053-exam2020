import { LitElement, html, css } from "../../node_modules/lit-element/lit-element.js";

class EditUser extends LitElement {
  static get properties() {
    return {
      user: { type: Object }
    };
  }

  // din kode her
  render() {
    return html`
      <form onsubmit="javascript: return false;" id="userForm" method="post">
      <div class="form-group">
      <label for="email">Email</label>
      <input  class="form-control" id="firstName" name="firstName" type="text" value="${this.user.firstName}" required>
      </div>
      <input type="submit" @click=${this.updateUser} id="submitForm" name="editUser" class="btn" value="Edit User"></input>
      </form>
    `;
}

  updateUser(e){
    const dataForm = new FormData(e.target.form);
    fetch('api/updateUser.php', {
      method: 'POST',
      body: dataForm
    }).then(res=>res.json())
    .then(data=>{
      if (data.status=='success'){
        console.log("The user was updated");
      } else {
        console.log("The user was not updated");
      }
    })
  }



}
customElements.define('edit-user', EditUser);
