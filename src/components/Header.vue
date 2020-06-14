<template>
    <header class="header">

        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.813 41.26"><rect width="3.414" height="13.479" transform="translate(9.417 15.892)"></rect><path d="M41.9,28.4a7.543,7.543,0,0,0-5.238-2,7.287,7.287,0,0,0-5.238,2A6.59,6.59,0,0,0,29.3,33.345a6.5,6.5,0,0,0,2.119,4.944,7.543,7.543,0,0,0,5.238,2,7.287,7.287,0,0,0,5.238-2,6.828,6.828,0,0,0,0-9.888Zm-2.472,7.828a3.839,3.839,0,0,1-5.533,0A3.908,3.908,0,0,1,32.773,33.4a4.044,4.044,0,0,1,1.118-2.884,3.839,3.839,0,0,1,5.533,0A3.949,3.949,0,0,1,40.542,33.4,4.058,4.058,0,0,1,39.424,36.229Z" transform="translate(-12.054 -10.861)"></path><path d="M70.093,27v7.416a3.623,3.623,0,0,1-.706,2.354,2.2,2.2,0,0,1-1.883.824,2.362,2.362,0,0,1-1.883-.824h0a3.623,3.623,0,0,1-.706-2.354V27H61.5v7.534a5.989,5.989,0,0,0,1.707,4.532,6.106,6.106,0,0,0,4.356,1.589,5.675,5.675,0,0,0,6-6.121V27Z" transform="translate(-25.302 -11.108)"></path><path d="M98.693,27v7.416a3.623,3.623,0,0,1-.706,2.354,2.2,2.2,0,0,1-1.883.824,2.362,2.362,0,0,1-1.883-.824h0a3.623,3.623,0,0,1-.706-2.354V27H90.1v7.534a5.989,5.989,0,0,0,1.707,4.532,6.106,6.106,0,0,0,4.356,1.589,5.675,5.675,0,0,0,6-6.121V27Z" transform="translate(-37.068 -11.108)"></path><path d="M120.837,44.43a1.995,1.995,0,0,0-2.708,0,1.848,1.848,0,0,0,0,2.59,1.995,1.995,0,0,0,2.708,0,1.731,1.731,0,0,0,.53-1.295A1.54,1.54,0,0,0,120.837,44.43Z" transform="translate(-48.382 -18.061)"></path><path d="M79.518,0V39.023H2.3V0H0V41.26H81.813V0Z"></path></svg>

        <nav>
            <ul class="header__navigation">
                <li class="header_navigation_items" >
                    <span class="bullet" v-if="currentPage == 1 || currentPage == 2"></span>
                    <p>pedido -------</p>
                </li>
                <li class="header_navigation_items" >
                    <span class="bullet" v-if="currentPage == 3 || currentPage == 4"></span>
                    <p>seus dados -------</p>
                </li>
                <li class="header_navigation_items" >
                    <span class="bullet" v-if="currentPage == 5"></span>
                    <p>confirmação ------</p>
                </li>
                <li class="header_navigation_items" > 
                    <span class="bullet" v-if="currentPage == 6"></span>
                    <p>conclusão</p>
                </li>
            </ul>
        </nav>
    </header>

</template>

<script>
export default {
    name: "Header",

    props: ['currentPage'],
}
</script>

<style>
.header {
    height: 100px;
    display: flex;
    flex-direction: row;
	justify-content: space-between;
    align-items: center;  
    margin-bottom: 70px;
    padding: 0 15%;
    background-color: #fff;
    color: #bcbcbc;
    box-shadow: 0px 0px 24px 0px rgba(0,0,0,0.08);
}

svg {
    fill: #41D3BD;
    margin: 2.5px 0;
    width: 100px;
    transition: all .5s ease;
}

.header__navigation {
    list-style-type: none;
    font-size: 17px;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
	justify-content: space-around;
}

.header_navigation_items {
    margin: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: end;
}

.header_navigation_items:last-child {
	margin-right: 0 ;
}

.bullet {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;
    width: 16px;
    height: 16px;
    border: 1.5px solid  #41D3BD;
    background: #fff;
    border-radius: 50px;
    margin: 5px;
}
</style>