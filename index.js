var totalamount=0;
const Item_array=[
    {
        "Name" : "Lemon Juice",
        "ID" : 123,
        "Price" : 30.00,
        "Count" : 1
    },
    {
        "Name" : "Mango Juice",
        "ID" : 124,
        "Price" : 60.00,
        "Count": 1
    },
    {
        "Name" : "Grape Juice",
        "ID" : 125,
        "Price" : 40.00,
        "Count": 1
    },
    {
        "Name" : "Pineapple Juice",
        "ID" : 126,
        "Price" : 50.00,
        "Count": 1
    },
    {
        "Name" : "Watermelon Juice",
        "ID" : 127,
        "Price" : 50.00,
        "Count": 1
    }
]

{/* <div class="btn-group btn-group-sm" role="group">
                            <button class="btn btn-sm btn-danger"><i class="fa-solid fa-minus fa-2xs"></i></button>
                            <button class="btn btn-outline-dark item-cart-span" disabled>1</button>
                            <button class="btn btn-sm btn-success"><i class="fa-solid fa-plus fa-2xs"></i></button>
                        </div> */}

$('.box').on('click',function(e)
{
    var tablebody=document.getElementById('carttable');
    var currentBt = e.currentTarget.id;
    var cartitem=document.createElement('tr');
    cartitem.classList.add('.row');
    cartitem.setAttribute("scope","row");
    
    var tdata1=document.createElement('td');
    var tdata2=document.createElement('td');
    var tdata3=document.createElement('td');
    var tdata4=document.createElement('td');
    
    var itembtn=document.createElement('div');
    itembtn.classList.add('btn-group','btn-group-sm');

    var btnmin1=document.createElement('button');
    btnmin1.classList.add('btn','btn-sm','btn-danger');
    btnmin1.innerHTML='<i class="fa-solid fa-minus fa-2xs"></i>';

    var btnmin2=document.createElement('button');
    btnmin2.classList.add('btn','btn-sm','btn-danger');
    btnmin2.innerHTML='<i class="fa-solid fa-minus fa-2xs"></i>';

    var itemcount=document.createElement('button');
    itemcount.classList.add('btn','btn-outline-dark','item-cart-span');
    
    var btnmax=document.createElement('button');
    btnmax.classList.add('btn','btn-sm','btn-success');
    btnmax.innerHTML='<i class="fa-solid fa-plus fa-2xs"></i>';
    itembtn.appendChild(btnmin1);
    
    var itemprice=document.createElement('input');
    itemprice.setAttribute('type','text')
    itemprice.classList.add('text-center')
    itemprice.setAttribute('disabled','disabled');

    tdata1.appendChild(btnmin2);
    
    switch(currentBt)
    {
        case 'btn-1':
            tdata2.innerText=Item_array[0]['Name'];
            itemprice.value=Item_array[0]['Price'];
            totalamount+=Item_array[0]['Price'];
            
            tdata4.appendChild(itemprice);

            // Item_array[0]['Count']++; 
            itemcount.innerText=Item_array[0]['Count'];
            itembtn.appendChild(itemcount);
            itembtn.appendChild(btnmax);
            tdata3.appendChild(itembtn);
            
            cartitem.appendChild(tdata1);
            cartitem.appendChild(tdata2);
            cartitem.appendChild(tdata3);
            cartitem.appendChild(tdata4);
            
            tablebody.appendChild(cartitem);
            break;
        case 'btn-2':
            tdata2.innerText=Item_array[1]['Name'];
            itemprice.value=Item_array[1]['Price'];
            
            totalamount+=Item_array[1]['Price'];
            tdata4.appendChild(itemprice);
            
            // Item_array[1]['Count']++;
            itemcount.innerText=Item_array[1]['Count'];
            itembtn.appendChild(itemcount);
            itembtn.appendChild(btnmax);

            tdata3.appendChild(itembtn);

            cartitem.appendChild(tdata1);
            cartitem.appendChild(tdata2);
            cartitem.appendChild(tdata3);
            cartitem.appendChild(tdata4);
            tablebody.appendChild(cartitem);


            break;
        case 'btn-3':
            tdata2.innerText=Item_array[2]['Name'];
            itemprice.value=Item_array[2]['Price'];
            totalamount+=Item_array[2]['Price'];

            tdata4.appendChild(itemprice);
            
            // Item_array[2]['Count']++;
            itemcount.innerText=Item_array[0]['Count'];
            itembtn.appendChild(itemcount);
            itembtn.appendChild(btnmax);

            tdata3.appendChild(itembtn);

            cartitem.appendChild(tdata1);
            cartitem.appendChild(tdata2);
            cartitem.appendChild(tdata3);
            cartitem.appendChild(tdata4);
            tablebody.appendChild(cartitem);
            break;
        case 'btn-4':
            tdata2.innerText=Item_array[3]['Name'];
            itemprice.value=Item_array[3]['Price'];
            totalamount+=Item_array[3]['Price'];

            tdata4.appendChild(itemprice);
            
            // Item_array[3]['Count']++;
            itemcount.innerText=Item_array[0]['Count'];
            itembtn.appendChild(itemcount);
            itembtn.appendChild(btnmax);

            tdata3.appendChild(itembtn);

            cartitem.appendChild(tdata1);
            cartitem.appendChild(tdata2);
            cartitem.appendChild(tdata3);
            cartitem.appendChild(tdata4);
            tablebody.appendChild(cartitem);
            break;
        case 'btn-5':
            tdata2.innerText=Item_array[4]['Name'];
            itemprice.value=Item_array[4]['Price'];
            totalamount+=Item_array[4]['Price'];

            tdata4.appendChild(itemprice);
            
            // Item_array[4]['Count']++;
            itemcount.innerText=Item_array[0]['Count'];
            itembtn.appendChild(itemcount);
            itembtn.appendChild(btnmax);

            tdata3.appendChild(itembtn);

            cartitem.appendChild(tdata1);
            cartitem.appendChild(tdata2);
            cartitem.appendChild(tdata3);
            cartitem.appendChild(tdata4);
            tablebody.appendChild(cartitem);
            break;    
    }
    var tb=document.getElementById('carttb');
    var cnt=document.getElementById('itemcount');
    var totalamt=document.getElementById('totalamount');
    cnt.innerText=tb.rows.length;
    totalamt.innerText=totalamount;
})

$('.table-button').on('click',function(e){
    var bt=e.currentTarget;
    var bg=bt.style.backgroundColor;
    if(bg==="rgb(13, 42, 84)")
    {
        bt.style.backgroundColor = 'gray';
    }
    else
    {
        bt.style.backgroundColor = "rgb(13, 42, 84)";
    }
    
})
