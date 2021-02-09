import { Component, OnInit } from '@angular/core';
import { UserProfile } from '../../services/models';
import { UsersService } from 'src/app/services/users.service';
import { Router } from '@angular/router';
import axios from 'axios';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  users: UserProfile[];


  constructor(
    private userService: UsersService,
    private router: Router
  ) { }
  
  update(user){
    this.router.navigate(['/admin/update-user/'+user.id],{
      state :{
        data : user
      }
    });
  }
  ngOnInit(): void {
    this.getUsers();
  }

  hidden = true;
  id: number;

  delete(id) {
    this.hidden = !this.hidden;
    this.id = id;
  }

  getUsers() {
    document.getElementById('spinner').style.display = "block";
    const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token'));
    axios.get("https://btal-ride.herokuapp.com/api/admin-client", { headers: { Authorization: AuthStr } })
      .then(response => {
        document.getElementById('spinner').style.display = "none";
        this.users = response.data;
      })
      .catch((error) => {
        console.log('error ' + error);
      });

  }

  alertConfirmation(id) {
    Swal.fire({
      title: 'Are you sure?',
      text: 'This process is irreversible.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      cancelButtonText: 'No'
    }).then((result) => {
      if (result.value) {
        const AuthStr = 'Bearer '.concat(window.localStorage.getItem('admin_token'));
        axios.delete("https://btal-ride.herokuapp.com/api/admin-client/" + id, { headers: { Authorization: AuthStr } })
          .then(response => {
            Swal.fire(
              'Removed!',
              'User removed successfully.',
              'success'
            )
            window.location.reload();
          })
          .catch((error) => {
            console.log('error ' + error);
          });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire(
          'Cancelled',
          'Client still in our database.)',
          'error'
        )
      }
    })
  }

}