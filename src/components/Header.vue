<template>
    <header class="header">
        <img class="logo" src="../assets/ico-iouu.svg" fill="#555"/>
        <nav>
            <ul class="header__navigation">
                <li class="header_navigation_items" >
                    <span v-if="currentPage == 1 || currentPage == 2"></span>
                    pedido -------
                </li>
                <li class="header_navigation_items" >
                    <span v-if="currentPage == 3 || currentPage == 4"></span>
                    seus dados -------
                </li>
                <li class="header_navigation_items" >
                    <span v-if="currentPage == 5"></span>
                    confirmação ------
                </li>
                <li class="header_navigation_items" > 
                    <span v-if="currentPage == 6"></span>
                    conclusão
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
    display: flex;
    flex-direction: row;
	justify-content: space-between;
	align-items: center;
	margin: 0 15%;
}

.logo {
    color: #555; 
    width: 100px;
}

.header__navigation {
    list-style-type: none;
    margin: 0;
    padding: 0;
    display: flex;
    flex-direction: row;
	justify-content: space-around;
}

.header_navigation_items {
	margin-right: 5px;
}

.header_navigation_items:last-child {
	margin-right: 0 ;
}
</style>