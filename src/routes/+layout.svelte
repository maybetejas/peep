<script>
  import { dataset_dev } from "svelte/internal";
  import { getImageURL } from "$lib/utils";
  import "../app.postcss";

  export let data;
</script>

<div class="min-h-full">
  <nav class="navbar bg-base-100 border-b">
    <div class="flex-1">
      <a href="/" class="btn btn-ghost normal-case text-xl"> Washi Washi </a>
    </div>
    <div class="flex-none">
      {#if !data.user}
        <div class="dropdown dropdown-end">
          <a href="/login" class="btn btn-primary">Login</a>
          <a href="/register" class="btn btn-secondary">Register</a>
        </div>
      {:else}
        <div class="dropdown dropdown-end mr-4">
          <a href="/projects/new" class="btn btn-primary btn-outline"
            >Add Project</a
          >
        </div>
        <div class="dropdown dropdown-end">
          <label tabindex="0" class="btn btn-ghost btn-circle avatar">
            <div class="w-10 rounded-full">
              <img
                s
                src={data.user?.avatar
                  ? getImageURL(
                      data.user?.collectionId,
                      data.user?.id,
                      data.user?.avatar
                    )
                  : `https://ui-avatars.com/api/?name=${data.user?.name}`}
                alt="user avatar"
              />
            </div>
          </label>

          <ul
            tabindex="0"
            class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <a href="/my/projects" class="justify-between">My Projects</a>
            </li>
            <li>
              <a href="/my/settings">Settings</a>
            </li>
            <li>
              <form action="/logout" method="post">
                <button type="submit" class="w-full text-start">Logout</button>
              </form>
            </li>
          </ul>
        </div>
      {/if}
    </div>
  </nav>

  <div class="py-4">
    <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
      <slot />
    </div>
  </div>
</div>
