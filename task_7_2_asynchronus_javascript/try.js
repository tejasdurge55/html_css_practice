console.log("start");
console.log("task1");

function a(){setTimeout(function(){console.log("task2")},5000);
}
function b(){setTimeout(function(){console.log("task3")},10000);
}
b();
console.log("task4");
console.log("task5");
a();
