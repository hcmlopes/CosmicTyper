<script>
  import { _ } from "svelte-i18n";
</script>

<section class="hero is-fullheight-with-navbar">
  <div class="hero-body">
    <div class="container has-text-centered ">
      <!-- <img
        src="assets/images/logo.png"
        width="500"
        alt="Code Palm Beach Student Typer" /> -->
      <h1 class="title has-text-dark">
        <span class="has-text-weight-light">{$_('page.home.welcome')}</span>
        <br />
        <span class="has-text-weight-bold">Student Typer</span>
      </h1>
      <p class="subtitle has-text-dark has-text-weight-bold has-margin-top-7">
        {$_('page.home.slogan')}
      </p>
    </div>
  </div>
</section>
