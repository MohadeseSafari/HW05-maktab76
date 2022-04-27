function overlappingRectangles(l1,r1,l2,r2) {
    let x_overlap = (Math.min(r1[0], r2[0]) - Math.max(l1[0], l2[0]));
    let y_overlap = (Math.min(r1[1], r2[1]) - Math.max(l1[1], l2[1]));

    let areaOverlap= 0
    if (x_overlap > 0 && y_overlap > 0)
        areaOverlap = x_overlap * y_overlap
  
    
    return areaOverlap;
}

let variable1 = [{ x: -8, y: -7 }, { x: -4, y: 0 }];
let var1 = variable1.map(item => {
	return Object.values(item);
})
let l1 = var1[0];   //[-8,-7]
let r1 = var1[1];   //[-4,0]

let variable2 = [{ x: -5, y: -9 }, { x: -1, y: -2 }];
let var2 = variable2.map(item => {
	return Object.values(item);
})
let l2 = var2[0];  //[-5,-9]
let r2 = var2[1];  //[-1,-2]
console.log(overlappingRectangles(l1,r1,l2,r2));
