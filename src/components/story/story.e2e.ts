import { newE2EPage } from "@stencil/core/testing";

describe("pwc-map-story", () => {
  it("renders", async () => {
    const page = await newE2EPage();
    await page.setContent("<pwc-map-story></pwc-map-story>");

    const element = await page.find("pwc-map-story");
    expect(element).toHaveClass("hydrated");
  });
});
