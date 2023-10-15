import {Component, Inject, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-menu-edit-detail',
  templateUrl: './menu-edit-detail.component.html',
  styleUrls: ['./menu-edit-detail.component.css']
})
export class MenuEditDetailComponent implements OnInit {
    menuForm: FormGroup;
    menuItemUrl = 'http://localhost:8080/api/menuItems';

    constructor(
        private http: HttpClient,
        private dialogRef: MatDialogRef<MenuEditDetailComponent>,
        private formBuilder: FormBuilder,
        @Inject(MAT_DIALOG_DATA) public data: any,
    ) {
        this.menuForm = this.formBuilder.group({
            menuItem_title: ['', Validators.required],
            description: ['', Validators.required],
            price: ['', Validators.required],
            image_URL: ['', Validators.required],
        });
    }

    ngOnInit(): void {
        this.menuForm.patchValue(this.data);
    }

    onSubmit() {
        let updatedMenuItem = {
            menuItem_title: this.menuForm.value.menuItem_title,
            description: this.menuForm.value.description,
            price: this.menuForm.value.price,
            image_URL: this.menuForm.value.image_URL
        }
        if (this.menuForm.valid) {
            if (this.data) {
                console.log("updated item with id " + this.data.id)
                this.http.put(this.menuItemUrl + "/" + this.data.id, updatedMenuItem)
                    .subscribe({
                        next: (val: any) => {
                            alert('Item details updated!');
                            this.dialogRef.close(true);
                        },
                        error: (err: any) => {
                            console.error(err);
                            alert("Error while updating the item!");
                        },
                    });
            } else {
                console.log("No data")
                this.http.post(this.menuItemUrl, updatedMenuItem).subscribe({
                    next: (val: any) => {
                        alert('Item added successfully!');
                        this.menuForm.reset();
                        this.dialogRef.close(true);
                    },
                    error: (err: any) => {
                        console.error(err);
                        alert("Error while adding the item!");
                    },
                });
            }
        }
    }
}
