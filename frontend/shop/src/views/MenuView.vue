<script>
    import { RouterLink } from 'vue-router'
</script>
<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div class="container-fluid">
            <RouterLink class="navbar-brand" to="/"><img src="../assets/rayo.webp" alt="rayo" style="width: 50px;">Rayo's Shop</RouterLink>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item">
                        <RouterLink class="navbar-brand" to="/clients/login">Login</RouterLink>
                        <RouterLink class="navbar-brand" to="/clients">Clients</RouterLink>
                        <RouterLink class="navbar-brand" to="/suppliers">Suppliers</RouterLink>
                        <RouterLink class="navbar-brand" to="/sale">Sale</RouterLink>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>