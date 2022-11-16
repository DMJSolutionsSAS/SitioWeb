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