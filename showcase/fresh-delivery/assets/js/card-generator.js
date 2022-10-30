function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

function card_generator() {
    template = `
    <div class="col-lg-3 px-0 pe-lg-2 col-12 card_wrapper">
        <div class="card">
        <div class="card-head">
        <img src="img/category/#IMG" alt="" class="img-fluid">
        </div>
            <div class="card-body pt-1 pb-0 px-lg-1">

                <h4 class="card-title font-2 my-0"> #TITLE </h4>
                
                <div class="btn-group btn-group-sm d-flex" role="group" >
                    <button type="price" class="btn btn-outline-success px-1  btn-sm font-sm theme1-bg border-0 text-dark">
                        ₹#DISCOUNTED_PRICE <s>#PRICE</s>
                    </button>
                    <button type="quantity" class="btn btn-dark px-1  position-relative">
                        <span class="">Quantity</span>
                        <span  class="d-inline position-absolute top-0 start-0" >
                            <i type="quantity-indicator" class="fad fa-utensils-alt " style="transition:0.5s"></i>
                        </span>
                    </button>
                    <button type="quantity" class="btn btn-outline-dark px-1  font-sm" >200g</button>
                    <button type="quantity" class="btn btn-outline-dark px-1  font-sm" >500g</button>
                    <button type="quantity" class="btn btn-outline-dark px-1  font-sm" >1000g</button>
                </div>

                <div class="btn-group dropend mt-1">
                    <button type="button" class="btn btn-dark btn-sm dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                        <span style="z-index:99">Delivery<span>
                        <span  class=" top-0 start-0">
                            <i class="fad fa-stopwatch-20"></i>
                            <img type="time-indicator" src="img/time/morning.webp" width="24" alt="..." class="float-right" style="opacity:0" hidden>
                        </span>
                    </button>
                    <ul type="time" class=" dropdown-menu dropdown-menu-dark">
                        <button class="btn dropdown-item rounded-0  px-1 font-sm" bg-trig="morning.webp">06AM - 09AM</button>
                        <button class="btn dropdown-item rounded-0  px-1 font-sm" bg-trig="afternoon.webp">10AM - 01PM</button>
                        <button class="btn dropdown-item rounded-0  px-1 font-sm" bg-trig="evening.webp">02PM - 05PM</button>
                        <button class="btn dropdown-item rounded-0  px-1 font-sm" bg-trig="night.webp"> 06PM - 09PM </button>
                    </ul>
                </div>

                <p class="card-text py-2 font-md font-4">
                    Our best catalog of chicken. lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor 
                </p>

            
            </div>
            <button class="add2bag btn btn-dark theme1-bg btn-sm w-100 py-2" type="button" onclick="addItemToBag('#ID')">
                <i class="fad #ICON"></i> Add This
            </button>
        </div>
    </div>
    `

    imagenames = ["chicken0.webp","mutton0.webp","fish0.webp","eggs0.webp",]
    data=[
        {name:"chicken",title:"Chicken Boneless Soft",img:"chicken0.webp",price:{"200":120,"500":230,"1000":420},desc:"",fa_icon:"fa-turkey"},
        {name:"chicken",title:"Mutton Boneless Premium",img:"mutton0.webp",price:{"200":140,"500":280,"1000":500},desc:"",fa_icon:"fa-sheep"},
        {name:"chicken",title:"Fish Indian Apollo",img:"fish0.webp",price:{"200":120,"500":230,"1000":420},desc:"",fa_icon:"fa-fish-cooked"},
        {name:"chicken",title:"Premium Eggs Carton",img:"eggs0.webp",price:{"200":120,"500":230,"1000":420},desc:"",fa_icon:"fa-egg"},
        ]
    var count = 0
    for (let i of data) {
        PRICE = getRandomInt(100, 500)
        $('#card-gallery').append(
            template.replace('#IMG', i.img)
            .replace('#TITLE', i.title)
            .replace('#PRICE', i.price["200"]+20)
            .replace('#DISCOUNTED_PRICE', i.price["200"])
            .replace('#ICON', i.fa_icon)
            )
    }
}

function addItemToBag(ID) {
    swal("Product Added To Cart!", "Your Meat Is added Successfully, Go To Cart to Finalize the purchase", "success");
}

$(document).ready(function () {
    card_generator()
    responsiveButtonGroup = $('[type="quantity"],[type="time"] li button').click(function(event) {
        $(this).siblings().removeClass('bg-dark text-white ')
        $(this).toggleClass('bg-dark text-white shadow-1')
    });

    responsiveTimeIcon = $("[type='time'] button").click(function(event) {
        $img=$(this).parent().parent().find("[type='time-indicator']")
        var imgAddress=$(this).attr('bg-trig')
        if ($img.attr('hidden') !== undefined) { //initial trigger
            $img.removeAttr('hidden').promise().then(()=>{$img.animate({'opacity':'1'})})
            $img.attr('src',"img/time/"+imgAddress)
        }
        else{
            $img.animate({'opacity':'0'},100).promise().then(()=>{
                $img.attr('src',"img/time/"+imgAddress)
                setTimeout(()=>{$img.animate({'opacity':'1'},200)},100)
            })
            
        }
        $(this).addClass('theme1-bg')
        $(this).siblings().removeClass('theme1-bg')
        $img.siblings().remove()
    })

    responsiveQuantityIcon = $("[type='quantity']").click(function(event) {
        $icon=$(this).parent().find('[type="quantity-indicator"]')
        $localBtnGroup=$(this).parent().find('[type="quantity"]')
        $icon.css('transform',`scale(${$localBtnGroup.index(this)})`)
        
    });


});