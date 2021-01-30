class Form2 {
    constructor(){
      this.button = createButton('Enter');
      this.input = createInput('Answer');  
    }

    display(){
       this.input.position(50,50,20,20);
       this.button.position(65,50,20,10); 
    }
}