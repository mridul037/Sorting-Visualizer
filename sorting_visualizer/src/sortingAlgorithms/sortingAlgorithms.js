export function getbubbleSortAnime(array){

    const animations =[];

    if(array.length<=1)return array;

    const auxiliaryArray=array.slice();

    bubbleSortHelp(auxiliaryArray,animations);

    return animations;

}

function bubbleSortHelp(
    	arr,
	   animations,
	    ){

  let sorted;
//let round = 0;
  do{
       sorted=false;
    for(let i=0;i<arr.length-1;i++)

     
    {animations.push([i,i+1,true]);
    
     animations.push([i,i+1,true]);
     
     if(arr[i]>arr[i+1]){
     
         animations.push([i,arr[i+1],false]);
      
         animations.push([i+1,arr[i],false]);
        
         let temp=arr[i];
        
         arr[i]=arr[i+1];
        
         arr[i+1]=temp;
        
         sorted=true;
      }

      
    }

  }while(sorted);

}











