import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from '../../../services/contact.service';
import { ValidacionesService } from '../../../services/validaciones.service';
import { NewContact } from '../../../interfaces/interfaz.interface';

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

  public nuevo!: NewContact;

  constructor(
    private _cs:ContactService,
    private formBuiler: FormBuilder,
    private _vs:ValidacionesService) { }

    get contactos (){
      return this._cs._contact;
    }  

    ngOnInit(): void {
      this.init();
      this.iniciarFormularios(); 
    }

    init(){
      this.nuevo = {
        usuario:{
          name:'',
          email:''
        },
        contacto:{
          asunto:'',
          mensaje:''
        }
      };
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
      console.log('email',this.emailValid);
      

    }

    guardarDatos(){
      this.submitted = true;
      if(this.emailValid !== false){
        const form = this.formulario.value;
    
        if(this.formulario.valid){
          this.submitted = false;  this.okButton = true;
    
          this.miJson(form);
        }else{
          alert("formulario invalido");
          this.okButton = true;
        }    
      }else{
        alert('correo invalido')
      }
    }

    miJson(form:any){
      this.nuevo = {
        usuario:{
          name:form.name,
          email:form.email
        },
        contacto:{
          asunto:form.asunto,
          mensaje:form.mensaje
        }
      };

      console.log(this.nuevo);
      
      //this.guardarContact(this.nuevo); 
    }

    guardarContact(json:any){
      this._cs.save(json).subscribe( (res:any) =>{
        if(res.status){
          alert(res.mensaje);
          this.init();
          this.formulario.reset();
        }else{
          alert(res.mensaje);
          this.init();
          this.formulario.reset();
        }
      });
    }
  
    get f() {
      return this.formulario.controls;
    }

}
