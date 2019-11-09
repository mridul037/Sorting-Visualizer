import React from 'react';
import {getMergeSortAnime} from '../sortingAlgorithms/getMergeSortAnime.js';
import {getbubbleSortAnime} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';
const ANIMATION_SPEED_MS=6;
const NUMBER_OF_ARRAY_BARS=80;
const PRIMARY_COLOR='turquoise';
const SECONDARY_COLOR='red';

export default class SortingVisualizer extends React.Component{
  constructor(props){
    super(props);
    this.state={
    	array:[],
    };
}

componentDidMount(){
	this.resetArray();
}

resetArray(){
	const array=[];
	for(let i=0;i<NUMBER_OF_ARRAY_BARS;i++){
		array.push(randomVal(5,500));
	}
this.setState({array});
}
///////////////////////////////////////////
MergeSort(){

const animations=getMergeSortAnime(this.state.array);
for(let i=0;i<animations.length;i++){
	const arrayBars=document.getElementsByClassName('array-bar');
	const isColorChange=i%3!==2;
	if(isColorChange){
       const[barOneIdx,barTwoIdx]= animations[i];
       const barOneStyle = arrayBars[barOneIdx].style;
       const barTwoStyle = arrayBars[barTwoIdx].style;
       const color=i%3 ===0?SECONDARY_COLOR:PRIMARY_COLOR;
       setTimeout(()=>{
       	barOneStyle.backgroundColor=color;
       	barTwoStyle.backgroundColor=color;
       },i*ANIMATION_SPEED_MS);
   }else{
   	setTimeout(()=>{
   		const [barOneIdx,newHeight]=animations[i];
   		const barOneStyle=arrayBars[barOneIdx].style;
   		barOneStyle.height=`${newHeight}px`;
   	},i*ANIMATION_SPEED_MS);
   }

  }

}
///////////////////////////////////////////////////////////////
BubbleSort(){
const animations=getbubbleSortAnime(this.state.array);
for(let i=0;i<animations.length;i++){
	const arrayBars=document.getElementsByClassName('array-bar');
	const isColorChange=animations[i][2];
	if(isColorChange){
       const[barOneIdx,barTwoIdx]= animations[i];
       const barOneStyle = arrayBars[barOneIdx].style;
       const barTwoStyle = arrayBars[barTwoIdx].style;
       const color=i%2===0?SECONDARY_COLOR:PRIMARY_COLOR;
       setTimeout(()=>{
       	barOneStyle.backgroundColor=color;
       	barTwoStyle.backgroundColor=color;
       },i*ANIMATION_SPEED_MS);
   }else{
   	setTimeout(()=>{
   		const [barOneIdx,newHeight]=animations[i];
   		const barOneStyle=arrayBars[barOneIdx].style;
   		barOneStyle.height=`${newHeight}px`;
   	},i*ANIMATION_SPEED_MS);
   }

  }

}
///////////////////////////////////////////////////////////////

render(){
	const {array}=this.state;

   return(
    <div className="array-container">
    {array.map((value,idx)=>(
         <div
         className="array-bar"
         key={idx}
         style={{
         	backgroundColor:PRIMARY_COLOR,
         	height: `${value}px`,
         }}></div>
        ))}
        <div>
        <input type="checkbox" ></input>
        </div>
  <button onClick={() => this.resetArray() } id="button-container">Generate New Array</button>
  <button onClick = {() => this.MergeSort()}>Merge sort the  array</button>
  <button onClick = {() => this.BubbleSort()}>Bubble  sort the array</button>  
  
    </div>

);
}

}

function randomVal(min,max){
return Math.floor(Math.random()*(max-min+1)+min);
}
