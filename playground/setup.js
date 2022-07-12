/* eslint camelcase: ["off"]*/
/* eslint import/no-commonjs: ["off"]*/
/* eslint import/no-extraneous-dependencies: ["off"]*/

const { MeiliSearch } = require('meilisearch')

;(async () => {
  const client = new MeiliSearch({
    host: 'http://127.0.0.1:7700',
    apiKey: 'masterKey',
  })

  const index = client.index('docs')

  const dataset = [
    {
      objectID: '32e3e560191d3d27d270cc142990ec7521c5e629',
      url: 'https://docs.meilisearch.com#getting-started-with-meilisearch',
      hierarchy_radio_lvl0: null,
      hierarchy_radio_lvl1: null,
      hierarchy_radio_lvl2: 'Getting started with MeiliSearch',
      hierarchy_radio_lvl3: null,
      hierarchy_radio_lvl4: null,
      hierarchy_radio_lvl5: null,
      hierarchy_lvl0: 'Documentation',
      hierarchy_lvl1: 'MeiliSearch Documentation',
      hierarchy_lvl2: 'Getting started with MeiliSearch',
      hierarchy_lvl3: null,
      hierarchy_lvl4: null,
      hierarchy_lvl5: null,
      hierarchy_lvl6: null,
      content: null,
      anchor: 'getting-started-with-meilisearch',
      _formatted: {
        objectID: '32e3e560191d3d27d270cc142990ec7521c5e629',
        url: 'https://docs.meilisearch.com#getting-started-with-meilisearch',
        hierarchy_radio_lvl0: null,
        hierarchy_radio_lvl1: null,
        hierarchy_radio_lvl2: '<em>Getting</em> started with MeiliSearch',
        hierarchy_radio_lvl3: null,
        hierarchy_radio_lvl4: null,
        hierarchy_radio_lvl5: null,
        hierarchy_lvl0: 'Documentation',
        hierarchy_lvl1: 'MeiliSearch Documentation',
        hierarchy_lvl2: '<em>Getting</em> started with MeiliSearch',
        hierarchy_lvl3: null,
        hierarchy_lvl4: null,
        hierarchy_lvl5: null,
        hierarchy_lvl6: null,
        content: null,
        anchor: 'getting-started-with-meilisearch',
      },
    },
    {
      objectID: '94560645167be070996b97c509e1df72bac2cba4',
      url: 'https://docs.meilisearch.com/faq.html#i-have-just-updated-meilisearch-and-i-am-getting-an-error-cannot-open-database-expected-meilisearch-engine-version',
      hierarchy_radio_lvl0: null,
      hierarchy_radio_lvl1: null,
      hierarchy_radio_lvl2:
        'I have just updated MeiliSearch, and I am getting an error: &quot;Cannot open database, expected MeiliSearch engine version...&quot;',
      hierarchy_radio_lvl3: null,
      hierarchy_radio_lvl4: null,
      hierarchy_radio_lvl5: null,
      hierarchy_lvl0: 'Documentation',
      hierarchy_lvl1: 'FAQ',
      hierarchy_lvl2:
        'I have just updated MeiliSearch, and I am getting an error: &quot;Cannot open database, expected MeiliSearch engine version...&quot;',
      hierarchy_lvl3: null,
      hierarchy_lvl4: null,
      hierarchy_lvl5: null,
      hierarchy_lvl6: null,
      content: null,
      anchor:
        'i-have-just-updated-meilisearch-and-i-am-getting-an-error-cannot-open-database-expected-meilisearch-engine-version',
      _formatted: {
        objectID: '94560645167be070996b97c509e1df72bac2cba4',
        url: 'https://docs.meilisearch.com/faq.html#i-have-just-updated-meilisearch-and-i-am-getting-an-error-cannot-open-database-expected-meilisearch-engine-version',
        hierarchy_radio_lvl0: null,
        hierarchy_radio_lvl1: null,
        hierarchy_radio_lvl2:
          'I have just updated MeiliSearch, and I am <em>getting</em> an error: &quot;Cannot open database, expected MeiliSearch engine version...&quot;',
        hierarchy_radio_lvl3: null,
        hierarchy_radio_lvl4: null,
        hierarchy_radio_lvl5: null,
        hierarchy_lvl0: 'Documentation',
        hierarchy_lvl1: 'FAQ',
        hierarchy_lvl2:
          'I have just updated MeiliSearch, and I am <em>getting</em> an error: &quot;Cannot open database, expected MeiliSearch engine version...&quot;',
        hierarchy_lvl3: null,
        hierarchy_lvl4: null,
        hierarchy_lvl5: null,
        hierarchy_lvl6: null,
        content: null,
        anchor:
          'i-have-just-updated-meilisearch-and-i-am-getting-an-error-cannot-open-database-expected-meilisearch-engine-version',
      },
    },
    {
      objectID: '4411d6ab3488ebb7ec4b35b08f0839b5a51e19a5',
      url: 'https://docs.meilisearch.com/learn/getting_started/#get-started-with-meilisearch',
      hierarchy_radio_lvl0: null,
      hierarchy_radio_lvl1: 'Get started with MeiliSearch!',
      hierarchy_radio_lvl2: null,
      hierarchy_radio_lvl3: null,
      hierarchy_radio_lvl4: null,
      hierarchy_radio_lvl5: null,
      hierarchy_lvl0: '🚀 Getting started',
      hierarchy_lvl1: 'Get started with MeiliSearch!',
      hierarchy_lvl2: null,
      hierarchy_lvl3: null,
      hierarchy_lvl4: null,
      hierarchy_lvl5: null,
      hierarchy_lvl6: null,
      content: null,
      anchor: 'get-started-with-meilisearch',
      _formatted: {
        objectID: '4411d6ab3488ebb7ec4b35b08f0839b5a51e19a5',
        url: 'https://docs.meilisearch.com/learn/getting_started/#get-started-with-meilisearch',
        hierarchy_radio_lvl0: null,
        hierarchy_radio_lvl1: 'Get started with MeiliSearch!',
        hierarchy_radio_lvl2: null,
        hierarchy_radio_lvl3: null,
        hierarchy_radio_lvl4: null,
        hierarchy_radio_lvl5: null,
        hierarchy_lvl0: '🚀 <em>Getting</em> started',
        hierarchy_lvl1: 'Get started with MeiliSearch!',
        hierarchy_lvl2: null,
        hierarchy_lvl3: null,
        hierarchy_lvl4: null,
        hierarchy_lvl5: null,
        hierarchy_lvl6: null,
        content: null,
        anchor: 'get-started-with-meilisearch',
      },
    },
    {
      objectID: '62a814a6ff1c33eebbe13e1b9278529f366ad929',
      url: 'https://docs.meilisearch.com/learn/getting_started/whats_next.html#what-s-next',
      hierarchy_radio_lvl0: null,
      hierarchy_radio_lvl1: "What's next?",
      hierarchy_radio_lvl2: null,
      hierarchy_radio_lvl3: null,
      hierarchy_radio_lvl4: null,
      hierarchy_radio_lvl5: null,
      hierarchy_lvl0: '🚀 Getting started',
      hierarchy_lvl1: "What's next?",
      hierarchy_lvl2: null,
      hierarchy_lvl3: null,
      hierarchy_lvl4: null,
      hierarchy_lvl5: null,
      hierarchy_lvl6: null,
      content: null,
      anchor: 'what-s-next',
      _formatted: {
        objectID: '62a814a6ff1c33eebbe13e1b9278529f366ad929',
        url: 'https://docs.meilisearch.com/learn/getting_started/whats_next.html#what-s-next',
        hierarchy_radio_lvl0: null,
        hierarchy_radio_lvl1: "What's next?",
        hierarchy_radio_lvl2: null,
        hierarchy_radio_lvl3: null,
        hierarchy_radio_lvl4: null,
        hierarchy_radio_lvl5: null,
        hierarchy_lvl0: '🚀 <em>Getting</em> started',
        hierarchy_lvl1: "What's next?",
        hierarchy_lvl2: null,
        hierarchy_lvl3: null,
        hierarchy_lvl4: null,
        hierarchy_lvl5: null,
        hierarchy_lvl6: null,
        content: null,
        anchor: 'what-s-next',
      },
    },
    {
      objectID: 'ebfb0972d362287b0d54864884015e59b31a1096',
      url: 'https://docs.meilisearch.com/learn/getting_started/installation.html#installation',
      hierarchy_radio_lvl0: null,
      hierarchy_radio_lvl1: 'Installation',
      hierarchy_radio_lvl2: null,
      hierarchy_radio_lvl3: null,
      hierarchy_radio_lvl4: null,
      hierarchy_radio_lvl5: null,
      hierarchy_lvl0: '🚀 Getting started',
      hierarchy_lvl1: 'Installation',
      hierarchy_lvl2: null,
      hierarchy_lvl3: null,
      hierarchy_lvl4: null,
      hierarchy_lvl5: null,
      hierarchy_lvl6: null,
      content: null,
      anchor: 'installation',
      _formatted: {
        objectID: 'ebfb0972d362287b0d54864884015e59b31a1096',
        url: 'https://docs.meilisearch.com/learn/getting_started/installation.html#installation',
        hierarchy_radio_lvl0: null,
        hierarchy_radio_lvl1: 'Installation',
        hierarchy_radio_lvl2: null,
        hierarchy_radio_lvl3: null,
        hierarchy_radio_lvl4: null,
        hierarchy_radio_lvl5: null,
        hierarchy_lvl0: '🚀 <em>Getting</em> started',
        hierarchy_lvl1: 'Installation',
        hierarchy_lvl2: null,
        hierarchy_lvl3: null,
        hierarchy_lvl4: null,
        hierarchy_lvl5: null,
        hierarchy_lvl6: null,
        content: null,
        anchor: 'installation',
      },
    },
  ]

  const response = await index.addDocuments(dataset)

  const task = await client.waitForTask(response.uid)
  console.log(task)
})()