
console.log(this);

function persion (name){
    console.log('name',name);
    console.log('this',this);
}

const persionNew={
    id:1,
    name:'Ngoc Nam',
    info:function(){
        console.log('this new',this);
    }
}

// persionNew.info();

const presionNew1={
    id:2
};

const  persionBinding= persion.bind(presionNew1);

 persionBinding('Ngoc Nam Nhes');
// persionNew.info.call(presionNew1);

// seft invoke
(function nhan(x,y){
   console.log(x*y);
})(2,4);
