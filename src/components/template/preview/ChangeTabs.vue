<template>
    <div>
        <h2>PREVIEW</h2>
        <nav class="navbar navbar-top navbar-expand top-nav lg-px-5">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li class="nav-item top-nav-item">
                    <RouterLink class="nav-link active" aria-current="page" :to="{name: 'previews-games'}">Games</RouterLink>
                </li>
                <li class="nav-item top-nav-item">
                    <RouterLink class="nav-link active" aria-current="page" :to="{ name: 'previews-entertaiment' }">Entertaiments</RouterLink>
                </li>
            </ul>
        </nav>
    </div>
</template>