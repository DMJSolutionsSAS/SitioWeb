export interface NavI{
    id: number;
    menu: string,
    href: string,
    active:boolean
}

export interface HeroI{
    icono: string;
    name: string;    
}


export interface HerramientaI{
    src: string;
    alt:string
}


export interface TeamI{
    src: string;
    alt: string;
    ws: string;
    tw: string;
    fb: string;
    ig: string;
    ln: string;
    name: string;
    specialty: string;
}


export interface ContactI{
    icono: string;
    name: string;
    detalle:string;
    clase:string;
}


export interface NewContact{
    usuario: Usuario;
    contacto: Contacto;
}

export interface Usuario {
    name:string;
    email:string;
}

export interface Contacto {
    asunto:string;
    mensaje:string;
}



// stars footer Interface 
export interface FooterI {
  empresa: string;
  direccion: string;
  lugar: string;
  celular: string;
  correo: string;
  anio: string;
  redes_sociales_empresa: Redessocialesempresa[];
  utiles: Utile[];
  nuestro_servicio: Nuestroservicio[];
}

export interface Nuestroservicio {
  href: string;
  servicio: string;
}

export interface Utile {
  href: string;
  name: string;
}

export interface Redessocialesempresa {
  href: string;
  icon: string;
  class: string;
}

// end footer Interface 


export interface SubsI {
  notification: Notification;
  to: string;
  priority:string;
  content_available: boolean;
}

export interface Notification {
  title: string;
  body: string;
}


//firebase Contact

export interface ContactFireI {
  id? : string;
  name:string;
  email:string;
  asunto:string;
  mensaje:string;
}


export interface TokenI {
  id? : string;
  token:string;
}

export interface TokenII {
  id? : string;
}
