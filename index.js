let arr = [1,2,3,4,5,6,7,8];
const it = arr.length;
let flag = 0;
let lArr = [];
let tag = [];
let j =it+1;

function getRandEl() {
    let rand = Math.floor(Math.random() * arr.length);
    ret = arr[rand];
    arr.splice(rand,1);
    console.log(arr);
            return ret;
}

for(let i = 1; i<it+1; i++) {
    mean = getRandEl();
        tag[i]=document.createElement('div');
        tag[i].innerHTML = '<div class="card">'+mean+'</div>';
        tag[i].dataset.id = mean;
        tag[i].style.order = Math.round(Math.random() * i);
        tag[i].classList.add('card-wrapper');
        document.querySelector('.card-container').append(tag[i]);

        tag[j]=document.createElement('div');
        tag[j].innerHTML = '<div class="card">'+mean+'</div>';
        tag[j].dataset.id = mean;
        tag[j].style.order = Math.round(Math.random() * j);
        tag[j].classList.add('card-wrapper');
        document.querySelector('.card-container').append(tag[j]);
        j++;

}

document.querySelectorAll('.card-wrapper').forEach((el)=>{
    el.addEventListener('click',()=>{
        revertCard(el);
    })
})

function revertCard(el) {
    if (flag < 2) {
        if(!el.classList.contains('reverse')){
            el.classList.add('reverse');
            flag++;
            lArr.push(el.querySelector('.card').innerHTML)
            console.log(lArr);
            if((lArr.length==2) && (lArr[0]==lArr[1])){
                document.querySelectorAll('.reverse').forEach((k)=>{
                    k.classList.add('match');

                })


                flag=0;
                lArr=[];
            }else if(lArr.length==2){
                document.querySelectorAll('.card-wrapper').forEach((e)=>{
                    e.style.pointerEvents = 'none';
                    setTimeout(()=>e.classList.remove('reverse'), 1000);
                    flag=0;
                    lArr=[];
                    setTimeout(()=>e.style.pointerEvents = 'auto',1000);
                })
            }
        }
    }else {

    }
}

document.querySelectorAll('.card-wrapper').forEach((el)=>{
  el.addEventListener('click',()=>{
    if(document.querySelectorAll('.match').length == it*2){
      alert('Win!');
      document.querySelector('.replay-btn').style.display = 'block';

    }
  })
})

function replay() {
  location.reload();
}
