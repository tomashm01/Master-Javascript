class animal{
  constructor(especie,edad,color){
    this.especie=especie;
    this.edad=edad;
    this.color=color;
  }
  getEspecie(){
    return this.especie;
  }
  getEdad(){
    return this.edad;
  }
  getColor(){
    return this.color;
  }
  setEspecie(especie){
    this.especie=especie;
  }
  setEdad(edad){
    this.edad=edad;
  }
  setColor(color){
    this.color=color;
  }
  
}

class perros extends animal{
  constructor(especie,edad,raza){
    super(especie,edad);
    this.raza=raza;
  }
  getRaza(){
    return this.raza;
  }
}

var perro=new perros("perro",5,"doberman");

console.log(perro.getRaza()) 
perro.setEdad(10)
console.log(perro.getEdad())
