<nav>
    <div class="nav-container">
        <!-- svelte-ignore a11y-invalid-attribute -->
        <a href="/" class="nav-logo" title="Back to Homepage">only1lorez</a>
        <div class="nav-links">
            {#each nav as link}
                {#if link.isShow}
                    <a href={link.href} class="link">{link.title}</a>
                {/if}
            {/each}

            
        </div>
    </div>
</nav>

<div class="container">
    <!-- Pages will be injected below  -->
    <slot></slot>
</div>

<script>
    const nav = [
        {
            title: 'Обо мне',
            href: '/about',
            isShow: false,
        },
        {
            title: 'Блог',
            href: '/blog',
            isShow: false,
        },
        {
            title: 'Портфолио',
            href: '/project',
            isShow: false,
        },
        {
            title: 'Контакты',
            href: '/contact',
            isShow: false,
        },
    ];
</script>

<style>
    .container {
        max-width: 1400px;
        margin: 50px auto;
    }
</style>