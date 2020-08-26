class Food {
    constructor(x,y){
       

        this.foodStock = 0;
        this.image = loadImage("images/Milk.png");
       
    }

    display(){
        
       var x = 80, y = 100;

       imageMode(CENTER);

       if(this.foodStock!=0){
            for(var i = 0; i < this.foodStock; i++){
                if(i%10 === 0){
                    x=80;
                    y = y+50;
                }
                image(this.image,x,y,50,50);
                x=x+30;
            }
       }
    }


    updateFoodStock(foodS){
        this.foodStock = foodS;
    }


}