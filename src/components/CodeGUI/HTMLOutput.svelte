<script>
  // Stores
  import { HTML_CODE, CSS_CODE } from "../../store/code-data.js";

  // HACK - but necessary to avoid formatting issues in VSCode
  const openStyle = "<style>";
  const closeStyle = "</style>";
  let cssCode;
  CSS_CODE.subscribe(code => {
    cssCode = `${openStyle} ${code.join('')} ${closeStyle}`;
  });

  let htmlCode;
  HTML_CODE.subscribe(code => (htmlCode = code.join("")));
</script>

<div class="render">
  {@html cssCode}
  {@html htmlCode}
</div>
