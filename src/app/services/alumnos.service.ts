import { Injectable } from '@angular/core';
import { Firestore, collection, addDoc,collectionData,doc,deleteDoc  } from '@angular/fire/firestore';
import { updateDoc } from 'firebase/firestore';


import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor( private fire:Firestore ) { }

//instructor inixio
apreglinstructor (Alumnos:any):Promise<any>{
  const alumnosA= collection(this.fire,'instructortabla');
  return addDoc(alumnosA,Alumnos);
}
mostrarinstructor():Observable<any[]>{
  const alumnosA= collection(this.fire,'instructortabla');
  return collectionData(alumnosA,{idField:'id'}) as Observable<any[]>;
} 

deleteinstructor(Alumnos:any){
  const alumnosA= doc(this.fire,`instructortabla/${Alumnos.id}`);
  return deleteDoc(alumnosA);

}

editarinstructor (Alumnos:any):Promise<any>{
  const alumnosA= doc(this.fire,`instructortabla/${Alumnos.id}`);
  return updateDoc(alumnosA,Alumnos);
}

//instructor fin
 apregarAlumnos (Alumnos:any):Promise<any>{
    const alumnosA= collection(this.fire,'AlumnosCurso1');
    return addDoc(alumnosA,Alumnos);
  }
  //cursosName
  CursosName():Observable<any[]>{
    const alumnosA= collection(this.fire,'CursosName');
    return collectionData(alumnosA,{idField:'id'}) as Observable<any[]>;
  } 

  // getAlumnos():Observable<any[]>{
  //   const alumnosA= collection(this.fire,'Alumnos');
  //   return collectionData(alumnosA,{idField:'id'}) as Observable<any[]>;
  // }
  getAlumnoscurso1():Observable<any[]>{
    const alumnosA= collection(this.fire,'AlumnosCurso1');
    return collectionData(alumnosA,{idField:'id'}) as Observable<any[]>;
  } 
  
  deleteAlumnos(Alumnos:any){
    const alumnosA= doc(this.fire,`AlumnosCurso1/${Alumnos.id}`);
    return deleteDoc(alumnosA);

  }
  

 editarAlumnos (Alumnos:any):Promise<any>{
    const alumnosA= doc(this.fire,`AlumnosCurso1/${Alumnos.id}`);
    return updateDoc(alumnosA,Alumnos);
  }
//cursos get inicio
curso1Alu():Observable<any[]>{
  const alumnosA= collection(this.fire,'curso1Alu');
  return collectionData(alumnosA,{idField:'id'}) as Observable<any[]>;
} 
curso1AluAgregar (Alumnos:any):Promise<any>{
  const alumnosA= collection(this.fire,'curso1Alu');
  return addDoc(alumnosA,Alumnos);
}

curso1delete(Alumnos:any){
  const alumnosA= doc(this.fire,`curso1Alu/${Alumnos.id}`);
  return deleteDoc(alumnosA);

}
editarcurso1 (Alumnos:any):Promise<any>{
  const alumnosA= doc(this.fire,`curso1Alu/${Alumnos.id}`);
  return updateDoc(alumnosA,Alumnos);
}
//curso get fin

//cursos get inicio
curo2Alu():Observable<any[]>{
  const alumnosA= collection(this.fire,'curso2Alu');
  return collectionData(alumnosA,{idField:'id'}) as Observable<any[]>;
} 
curso2AluAgregar (Alumnos:any):Promise<any>{
  const alumnosA= collection(this.fire,'curso2Alu');
  return addDoc(alumnosA,Alumnos);
}

curso2delete(Alumnos:any){
  const alumnosA= doc(this.fire,`curso2Alu/${Alumnos.id}`);
  return deleteDoc(alumnosA);

}
editarcurso2 (Alumnos:any):Promise<any>{
  const alumnosA= doc(this.fire,`curso2Alu/${Alumnos.id}`);
  return updateDoc(alumnosA,Alumnos);
}
//curso get fin

//cursos get inicio
curo3Alu():Observable<any[]>{
  const alumnosA= collection(this.fire,'curso3Alu');
  return collectionData(alumnosA,{idField:'id'}) as Observable<any[]>;
}
curso3AluAgregar (Alumnos:any):Promise<any>{
  const alumnosA= collection(this.fire,'curso3Alu');
  return addDoc(alumnosA,Alumnos);
}

curso3delete(Alumnos:any){
  const alumnosA= doc(this.fire,`curso3Alu/${Alumnos.id}`);
  return deleteDoc(alumnosA);

}
editarcurso3 (Alumnos:any):Promise<any>{
  const alumnosA= doc(this.fire,`curso3Alu/${Alumnos.id}`);
  return updateDoc(alumnosA,Alumnos);
} 
//curso get fin

//cursos get inicio
curo4Alu():Observable<any[]>{
  const alumnosA= collection(this.fire,'curso4Alu');
  return collectionData(alumnosA,{idField:'id'}) as Observable<any[]>;
}
curso4AluAgregar (Alumnos:any):Promise<any>{
  const alumnosA= collection(this.fire,'curso4Alu');
  return addDoc(alumnosA,Alumnos);
}

curso4delete(Alumnos:any){
  const alumnosA= doc(this.fire,`curso4Alu/${Alumnos.id}`);
  return deleteDoc(alumnosA);

}
editarcurso4 (Alumnos:any):Promise<any>{
  const alumnosA= doc(this.fire,`curso4Alu/${Alumnos.id}`);
  return updateDoc(alumnosA,Alumnos);
} 
//curso get fin

//cursos get inicio
curo5Alu():Observable<any[]>{
  const alumnosA= collection(this.fire,'curso5Alu');
  return collectionData(alumnosA,{idField:'id'}) as Observable<any[]>;
}
curso5AluAgregar (Alumnos:any):Promise<any>{
  const alumnosA= collection(this.fire,'curso5Alu');
  return addDoc(alumnosA,Alumnos);
}
curso5delete(Alumnos:any){
  const alumnosA= doc(this.fire,`curso5Alu/${Alumnos.id}`);
  return deleteDoc(alumnosA);

}
editar5curso (Alumnos:any):Promise<any>{
  const alumnosA= doc(this.fire,`curso5Alu/${Alumnos.id}`);
  return updateDoc(alumnosA,Alumnos);
} 
//curso get fin

//cursos get inicio
curo6Alu():Observable<any[]>{
  const alumnosA= collection(this.fire,'curso6Alu');
  return collectionData(alumnosA,{idField:'id'}) as Observable<any[]>;
}
curso6AluAgregar (Alumnos:any):Promise<any>{
  const alumnosA= collection(this.fire,'curso6Alu');
  return addDoc(alumnosA,Alumnos);
} 
curso6delete(Alumnos:any){
  const alumnosA= doc(this.fire,`curso6Alu/${Alumnos.id}`);
  return deleteDoc(alumnosA);

}
editarcurso6 (Alumnos:any):Promise<any>{
  const alumnosA= doc(this.fire,`curso6Alu/${Alumnos.id}`);
  return updateDoc(alumnosA,Alumnos);
}
//curso get fin

//cursos get inicio
curo7Alu():Observable<any[]>{
  const alumnosA= collection(this.fire,'curso7Alu');
  return collectionData(alumnosA,{idField:'id'}) as Observable<any[]>;
} 
curso7AluAgregar (Alumnos:any):Promise<any>{
  const alumnosA= collection(this.fire,'curso7Alu');
  return addDoc(alumnosA,Alumnos);
}
curso7delete(Alumnos:any){
  const alumnosA= doc(this.fire,`curso7Alu/${Alumnos.id}`);
  return deleteDoc(alumnosA);

}
editar7curso (Alumnos:any):Promise<any>{
  const alumnosA= doc(this.fire,`curso7Alu/${Alumnos.id}`);
  return updateDoc(alumnosA,Alumnos);
}
//curso get fin

}
