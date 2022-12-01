import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';
import { ValidacionesService } from '../../../services/validaciones.service';
import { NewContact, ContactFireI } from '../../../interfaces/interfaz.interface';
import { Swal2Service } from '../../../services/swal2.service';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  public formulario!: FormGroup;
  public submitted = false;
  public emailValid = false;
  public okButton = false;

  public nuevo!: NewContact;//ya no

  public newContact!: ContactFireI;

  constructor( private _cs:ContactService, private formBuiler: FormBuilder, private _vs:ValidacionesService, private _sw2: Swal2Service) { }

    get contactos (){
      return this._cs._contact;
    }  

    ngOnInit(): void {
      this.initContact();
      this.iniciarFormularios(); 
    }

    initContact(){
      this.newContact = {
        name:'',
        email:'',
        asunto:'',
        mensaje:'',
      }
    }
  
    iniciarFormularios() {
      this.formulario = this.formBuiler.group({
        name: ['', [Validators.required, Validators.minLength(3)]],
        email: ['', [Validators.required, Validators.email]],
        asunto: ['', [Validators.required, Validators.minLength(3)]],
        mensaje: ['', [Validators.required, Validators.minLength(3)]],
      });
    }

    validarLetras(event: any) {
      return this._vs.validateLetters(event);
    }
  
    validarAlfaNumerico(event: any) {
      return this._vs.validateAphaNumeric(event);
    }
  
    validarCorreo(event: any) {
      this.emailValid = this._vs.validarEmail(event);
      console.log('email', this.emailValid);      
    }

    guardarDatos(){
      this.submitted = true;
      
      const form = this.formulario.value;
 
      if(form.email !== true){
        if(this.formulario.valid){ 
          this.submitted = false;  this.okButton = true; 
          this.guardarContact(form);
        }else{ 
          this.okButton = true; 
        }    
      }else{ 
        this.okButton = true;
      }
    }

    async guardarContact(form:ContactFireI){
      const res = await this._cs.saveContact(form);  
      if(res){
        this._sw2.successSwal('Contacto','Se registro con éxito 🚀');
        this.initContact();
        this.formulario.reset();
      }else{
        this._sw2.errorSwal('Contacto','No se puede registrar 📛');
        this.initContact();
        this.formulario.reset();
      }
    }
  
    get f() {
      return this.formulario.controls;
    }


}
