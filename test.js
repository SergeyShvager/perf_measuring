import { Selector } from "testcafe"; // first import testcafe selectors

fixture`Getting Started`
  .page`https://suchen.mobile.de/fahrzeuge/search.html?isSearchRequest=true&scopeId=C&ab.responsive=test2`;

//then create a test and place your code there
test("Measure VIP", async t => {
  await t
    .click(
      "#app-root > div._3axiTWcHtB._2KujkRsd5z > div.VtE1FoUvcL > main > div > div._2EB8dUEmne.VtE1FoUvcL._2fiPkmLS1S > div._3hi7AUfka9 > article:nth-child(4) > section:nth-child(1) > div > div > a"
    )

    // Use the assertion to check if the actual header text is equal to the expected one
    .expect(
      Selector(
        "#app-root > div._3axiTWcHtB._2KujkRsd5z > div.VtE1FoUvcL > main > div > div.mrpgHuNkT4 > article.RSseDmh6aG._1PAyUnocfj.UnQAiQNddp.P2j9xgsVrC._1RInPE9aNt._2iEKWvWkop"
      ).visible
    )
    .ok();
});
