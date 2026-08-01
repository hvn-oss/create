import { renderToStaticMarkup } from "react-dom/server";
import { expect, test } from "vite-plus/test";
import { Button } from "#/index.ts";

test("renders and forwards button props", () => {
  const markup = renderToStaticMarkup(
    <Button title="Save" variant="secondary">
      Save changes
    </Button>,
  );

  expect(markup).toBe(
    '<button data-variant="secondary" type="button" title="Save">Save changes</button>',
  );
});
