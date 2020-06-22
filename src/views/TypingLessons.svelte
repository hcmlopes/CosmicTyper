<script>
  import { onMount } from "svelte";
  import { LessonsList } from "../components";
  import { state, getTypingLessonsAction, updateTypingLesson } from "../store";
  import { _ } from "svelte-i18n";

  const { typingLessons } = state;

  onMount(async () => await getTypingLessons());

  async function getTypingLessons() {
    if (!$typingLessons.length) {
      await getTypingLessonsAction();
    }
  }

  function finishLesson({ detail: id }) {
    updateTypingLesson(id);
  }
</script>

<section class="container">
  <header class="has-margin-top-4 has-margin-bottom-4">
    <h1 class="is-size-3">
      {$_('page.typing_lessons.nav', { default: 'Typing Lessons' })}
    </h1>
    <p>{$_('page.typing_lessons.description')}</p>
  </header>

  <LessonsList
    baseURL="typing-lessons"
    lessons={$typingLessons}
    on:completed={finishLesson} />
</section>
