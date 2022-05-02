/* eslint-disable */

const SimplifiedMNListDiff = require("../../lib/deterministicmnlist/SimplifiedMNListDiff");
const SimplifiedMNList = require("../../lib/deterministicmnlist/SimplifiedMNList");
const rawDiff = {
  baseBlockHash: '6cddc5d028062c87d634119707a5b3c34ad357a6024c50c13e2adc6c2ad5658a',
  blockHash: '000000c58d5f1bbd16ca845c1f7b34b8e73573b8e59df38da98ecc005c44c473',
  cbTxMerkleTree: '01000000017cb212271572913ac4212141fcfff14203c7256d5a7b3dd118d39979cf95d8250101',
  cbTx: '03000500010000000000000000000000000000000000000000000000000000000000000000ffffffff050258100101ffffffff020034e230040000001976a914d003f3dcc6aab717ff22c7cd3c4d4baaf873f46e88ac004e5349060000001976a914d003f3dcc6aab717ff22c7cd3c4d4baaf873f46e88ac00000000460200581000005a2599559c59733fe8eeb4affee92ab6303be89103d95de639831d37d7e1b517bf1c5e5e2716aadd0c3cc6e92d4c12277441f3038d96d4af750db5a6b42ec77e',
  deletedMNs: [],
  mnList: [
    {
      proRegTxHash: 'b3b449f85213867385d6c5a82eeb222ca7cc7e09fd01b12ffd71aa73b4c5e740',
      confirmedHash: '00000eefe1cedc451725cee0c13a9f00d00f161d7b763381540ca81794623c45',
      service: '35.87.217.196:20001',
      pubKeyOperator: '080308897b0f8c25ded96b35ca7ca407f8e3d35064367f4fdeea138d4adb00e8752793592b45ceead426b3d942e2abd9',
      votingAddress: 'yVymvviPP5uXGux2BPeGJ1JrUpth7qsobR',
      isValid: true,
    },
    {
      proRegTxHash: '1fd8fb7818ed7c07145243a6dc48ad568fb5eee4260c4df6e05455b7cd8d0103',
      confirmedHash: '000008742811cd8b6bf14a9a4854e6bf50bbbfb8d709f4cb6fd35aee477b488b',
      service: '34.220.177.21:20001',
      pubKeyOperator: '1741dd3887d5f8add31f58fd654a09e65de89410d01ad46d5c5aee64ce2b5744877ecd68de253b54a0385abbcccbf9d5',
      votingAddress: 'yaoo8UhCn6wxPCvSSTQSYyG32yt52sgh4b',
      isValid: true,
    },
    {
      proRegTxHash: 'ff4fe5592cd19d23813650e020c8893588cd135e40988d9383a42fdd4373976e',
      confirmedHash: '00000c9b1269dad2a786bacee0550e54664b035544e1ee2af91b7f8809196eab',
      service: '54.213.1.8:20001',
      pubKeyOperator: '05e4ee07715f404eb394fd69304e361607d857331c9b9a58185f53c1e1da3c873140e50d3f360a85190e2a1244bf32d0',
      votingAddress: 'yLceJztHVZFbeqE9v86sLD9bDKFBmNqHQD',
      isValid: true,
    },
    {
      proRegTxHash: '1358a4665b8fd6229f28816011d862562d6cc9dfd5a3236f37e73a1915acd7af',
      confirmedHash: '00000aa210f9bad953717fdde614d04f707830ccafe1052c24ad170a71119d68',
      service: '34.214.198.116:20001',
      pubKeyOperator: '83b72dba724404a2cf69d08e3675cc8d27a2bc4afc51a5eb1553ed02453ab51b521196396fa32b429637931cede482d8',
      votingAddress: 'yVuPNBwY5Pknftb9VEKb8EyQd45DPDcyaq',
      isValid: true,
    },
    {
      proRegTxHash: '5afae9c55e3e54e78c19b13db84144c6c1e2119f72752bf8a44ab2e1c2e95cb0',
      confirmedHash: '000017dd0692d81505aa11400ea923ff78935d9e6d099ed90d98326c1c1c8a59',
      service: '54.190.97.111:20001',
      pubKeyOperator: '97d0651efed006c1541a7cef3212183361a11250dbf74d5d54e552a5b26afbd432d184873c7c8480851836d7be0fcba7',
      votingAddress: 'yi3gFgvXT6i249pQF1QkEBraDSJhcePMHj',
      isValid: true,
    },
    {
      proRegTxHash: '631156b65a6d7a864c14d6221dea15485cd23ab4c31770ff0d10faafa03f0991',
      confirmedHash: '000000599a95922a5ade6dcf89cb3abb29a0bb5412e03fe715d245471dd8dbe0',
      service: '35.86.246.238:20001',
      pubKeyOperator: '81a2e6169c3f49275041a54ad6efb118aa3a588b6d369e2725373a8603cb38557869fcf8b337dc835f349b32bfa2ec6f',
      votingAddress: 'yNuSyvkFxZPdsGJKgReQR6mnNjE8x5JJMk',
      isValid: true,
    },
    {
      proRegTxHash: '00731413f31cd3d72778c2ea04566effd4bf3034f6ec99098f1f87d1e5e402d2',
      confirmedHash: '000000599a95922a5ade6dcf89cb3abb29a0bb5412e03fe715d245471dd8dbe0',
      service: '35.89.88.110:20001',
      pubKeyOperator: '9707a3a9c840fc19a0f2c13720e1fd1df890e2866bf415175ffb897500accb0235149a117096e4b7a0cefae8ec47f023',
      votingAddress: 'ygq6DTRxEr3B3SC4aJYC5jqqnAyxaQpU74',
      isValid: true,
    },
    {
      proRegTxHash: 'd5dd37f1f8e9aa996c760a762da180a58339f6899bb8a31b33fe6338f2601035',
      confirmedHash: '0000050eacac01cbc8bcd1975384192aa5deeaf0c57994f9761bb7df97d738a5',
      service: '34.219.34.135:20001',
      pubKeyOperator: '17e8f04d989f8c9187c8fcedee7e38dc98876ba21f3a1576854aae6bb9c58f5bbcb4089db9a77cc7d2d8e10462e14530',
      votingAddress: 'yc1TGAi1eivpAv7DsSnExingdVbWchXQBz',
      isValid: true,
    },
    {
      proRegTxHash: 'e7310f2e45b53b4978b462391f58d9a946e5a144ae0af3a95a65ffaa85e33c36',
      confirmedHash: '000015dd56ef887e9933a762036fb1f189274b1fcaec291a130df19a93c106ca',
      service: '54.188.184.73:20001',
      pubKeyOperator: '88cf2a42b265e7d3a6af578884a273b0efbd4f28362fdc70e7e2668268584d2c74e889a1fa92b46cb2b00ebe3a0f97fb',
      votingAddress: 'yMDHEJNJyD3t6MBvMwkuDcQaoUD5e7oVYL',
      isValid: true,
    },
    {
      proRegTxHash: 'e0580f708ebfac01db837b508601ab842d56554f197967be6d0c95f0b96141b7',
      confirmedHash: '00000a214abf96270ec652b15369b9c1d7bf8735a8d8a0c153a3362fe009b6ef',
      service: '34.208.73.244:20001',
      pubKeyOperator: '17cda5de4c6d1513dd1472bb15116f900a9608087f2140dbef3b1ff063c864dafed97cd11a13997763c69b0b520b6f62',
      votingAddress: 'yjWZY4tDUGRrAajH8rr2kiTLBHJcjjzUZB',
      isValid: true,
    },
    {
      proRegTxHash: 'd68858b95ad0fe08729fff7ad50a92d4f4a736aa5015484a8edfa03dcdb26d78',
      confirmedHash: '0000155575c7d6761f13261c58a764186a3db72966d34681b52f62e03080a9f8',
      service: '35.162.226.158:20001',
      pubKeyOperator: '95690067658db6ff92c2e187fd040226978ec8a59e6ca76ed0c84cd48e588f173a8f67458e1250be504c6c8ead2ea7f7',
      votingAddress: 'yVbg4E2rownEjEUdeb2shARL3VTJPLBN4J',
      isValid: true,
    },
    {
      proRegTxHash: '3a70a9324bfafe604ba19d998f9b29a072eda8998372b6692a1520b229917b59',
      confirmedHash: '00002b1758c08c6ec9910a6b7847ee876774b42f0bf3cef892b604f2df64f70e',
      service: '54.70.158.196:20001',
      pubKeyOperator: '8e61d40a7affaaae1dc8afcf45ac1dd875debeea124b3191974b417237d4f8b3329cc3e9800a7297cdcbc9f2321fe165',
      votingAddress: 'yQn6gqFso8sDr5WtrCuJkKt1bda8z87GS3',
      isValid: true,
    },
    {
      proRegTxHash: 'e8df3edc6d3314618fbf50a3efa01faa8cc31688a3aa612ab1bf794c6c3ccb1c',
      confirmedHash: '000024bf48e6260ec57e7cd189a7f8ef135716fafc3b2b6a9cde7c21ec89e752',
      service: '54.213.80.112:20001',
      pubKeyOperator: '9580bcd65d587306a583ee47d9387ca40d4be2b7a2e7a0c9852faa3019de4b4672982a276e88fdb106da80a67b3e9c71',
      votingAddress: 'yjdSeNNs6pc4AQ26qpLD98mgukcmgjWoPw',
      isValid: true,
    },
    {
      proRegTxHash: '09dd7f07b9d3eb6df74307fdb9abbef42cb14948bc1daaeb1a1326fd7c33dffd',
      confirmedHash: '00000aa210f9bad953717fdde614d04f707830ccafe1052c24ad170a71119d68',
      service: '35.89.93.192:20001',
      pubKeyOperator: '9501395531b856dac937dd52b086288c33433ce4e51962574138f93436a127d9fe078b7d7e3937f56e5d0384c5b7e1be',
      votingAddress: 'yexFZ64u6snNR4JPuCffyJpsxZQsLAbJ8S',
      isValid: true,
    },
    {
      proRegTxHash: 'e8982ae45473793211756b10d3ab7a3e13e54f9f3097e3074876216fd9fac99e',
      confirmedHash: '000008742811cd8b6bf14a9a4854e6bf50bbbfb8d709f4cb6fd35aee477b488b',
      service: '35.87.26.233:20001',
      pubKeyOperator: '0cc4a8021c28d9ac15092fb191e6e2abf59c5e172827671f3ad1a3b843cd0b40237a0b60bee5166d349f708df2e14d17',
      votingAddress: 'ygt1Xk72M2rS4UsobWNLULdhu3y4yx2ppX',
      isValid: false,
    },
    {
      proRegTxHash: '676c31b51634d92bdf986ef0b2c54462a4eb39885a4478e1dcc8722b7f705f21',
      confirmedHash: '00000eefe1cedc451725cee0c13a9f00d00f161d7b763381540ca81794623c45',
      service: '35.88.159.173:20001',
      pubKeyOperator: '81655738125f19e6980bcb0131b14a057967430e216e7692f4368594503a93501f49c7110c410bb6c2662db519316168',
      votingAddress: 'yT8pGvmdXHyqfUHkpPSdG2wXjHUqZeP9MV',
      isValid: true,
    },
    {
      proRegTxHash: '8f9be44fb29faa32953aedb4c8387b1b516086eefaf317d9c784c484c9f05f21',
      confirmedHash: '000007f9e1fac2a178c42c21381b2710a6db010e751f66f467cc57f670bfd9ac',
      service: '54.149.124.44:20001',
      pubKeyOperator: '11654b0c476944ba013048064d97bfd43b8b1c0e4bdca0df3266bc5200d3ecb9ac1d1b57f0eebbc87c2b52c7dc15dc40',
      votingAddress: 'yND9nRg47m6oKuoMHG7m9YthQ63j8nbXyq',
      isValid: true,
    },
    {
      proRegTxHash: 'a989f0987fee64422c506eea25e17e835d6b6cd3a0bcca4145a6b6a92b8fa9a4',
      confirmedHash: '000015dd56ef887e9933a762036fb1f189274b1fcaec291a130df19a93c106ca',
      service: '52.42.37.110:20001',
      pubKeyOperator: '82cf7505be722ac14f1d8941083e6d4fe03ffde62f09761d5f83b42f32a9720f8fec9095a4a3fdcb73650817659b01f9',
      votingAddress: 'ydxtPrsjP2DjgBTkcjFPSTCPHLixJE6hah',
      isValid: true,
    },
    {
      proRegTxHash: '2c4a8e927837976a4fafba6934b9d867422edb5ee78cacd24caf73dcd1b912a4',
      confirmedHash: '000014cf31e1698605620477e4e46ec7e4d606dabbaef290f1a75207ea009c9a',
      service: '54.200.216.100:20001',
      pubKeyOperator: '19745c5d4c43483e1984284b4b7bf9b868247ca66f7bad0a5e9bf0d251013d0cd784c32eb8ecf3c6e5c6746c2bd42000',
      votingAddress: 'yNLAvV8QNwKhi4YSLzUGX3sT1v1p531j5M',
      isValid: true,
    },
    {
      proRegTxHash: 'b3e34aea792739e76221569d17b749ee1dd1412bfec7dcd36375bfb19ea5cdeb',
      confirmedHash: '0000155575c7d6761f13261c58a764186a3db72966d34681b52f62e03080a9f8',
      service: '52.13.14.211:20001',
      pubKeyOperator: '84812219574bf245639126fdf8d35f23fb3b30428ac8ecd0e2098cbb529d923447f38de7fdf22d191b3b4169ee4537fd',
      votingAddress: 'yYXiDYLMQ8a4A89ETqMX3C4wsKvq9WitPH',
      isValid: true,
    },
    {
      proRegTxHash: '4a959357fb77dd01fb53d14b0a765a8784ab65d7debc970e43976a92fcebf20b',
      confirmedHash: '00002f8e243c50a74d919f4e2c559e8e55f7e74aa321aba6924e53a6b84fab01',
      service: '54.191.200.9:20001',
      pubKeyOperator: '16c9b81cae06a4de67f9c17469a251cb6163a704e798b6a297df4f3e1db53959da400a996ea5fb8af96acf13f7b4f9b6',
      votingAddress: 'yb4s6aAe43AMdMw6oDtKZBQwRWB6Ut67PJ',
      isValid: true,
    },
    {
      proRegTxHash: '3726e88b6d49f267784ab065788e0703b3ddd994b6b3b56dd7c8510ca2e5624d',
      confirmedHash: '0000130e9fd2c852aff3ff0480339143c94a7183c495c0bad61181e0bbd90dfc',
      service: '54.191.204.177:20001',
      pubKeyOperator: '08738b60ae655d1383b18aff21aa3121d8cc2b627d4e34070202d30cac927e03e956c780381829adc7378aa5e48e4db1',
      votingAddress: 'ydE5Uc5gjbYxLcJqaAR5iU78HRbaBoLtvo',
      isValid: true,
    },
    {
      proRegTxHash: 'aac6640433ff777acdf68a062a38862de68386c40ed4bfc2847066f3f2cfbe6d',
      confirmedHash: '00001fc6c61199b93b5e641e71064e82b0c5fcf8b9dbad2c989294299b321c0c',
      service: '35.88.145.45:20001',
      pubKeyOperator: '031d8cc6bb521aac7acef3947d9c798d9a5883e94eec2c33a2f1853afc87ec8e2aba4312a5769fbf51dae8f10238130f',
      votingAddress: 'yfXCb8SG7oh9P1PvQRY7YrRQgm3o5rbqK4',
      isValid: true,
    },
    {
      proRegTxHash: '7d49276009482414e81ad5fde49fd1666867391db2bc2ed77d8cadbb1ba028b3',
      confirmedHash: '00002612152e315f67a823685b82cfbf162834e5dd5f3cf0a9ae64108fdc060c',
      service: '54.184.206.178:20001',
      pubKeyOperator: '87c39232f29bcb7933b460e47f1d3af4248a933f2ab93c227c146d0cca6bac3d0c8aa144b433c8a13a0d74b8f89251f5',
      votingAddress: 'yMqKaoCvXRA2D2qWmJKbLp2tajmSTKWSYU',
      isValid: true,
    },
    {
      proRegTxHash: '34e7c46d3cec0bc17d1b9c71179bc8621417d15e932d649277340bae77310eb3',
      confirmedHash: '00002b1758c08c6ec9910a6b7847ee876774b42f0bf3cef892b604f2df64f70e',
      service: '54.213.96.23:20001',
      pubKeyOperator: '915b170f1fd26118445ccd47f82102e0859bcbb3a896eb50a20bb967c717521f4b472146a6e65b3950e52197688c3165',
      votingAddress: 'yhgbpHvvynPRpsnfPCrgn9hUARidioXYeH',
      isValid: true,
    },
    {
      proRegTxHash: 'd85000df24aa45f41d3cb8d5313444eea05d7886c72dfa64953da4eeeb31d313',
      confirmedHash: '00002b1758c08c6ec9910a6b7847ee876774b42f0bf3cef892b604f2df64f70e',
      service: '35.167.223.208:20001',
      pubKeyOperator: '8d2be99d13751b0379f6834246ccaae18b472c66d30f963c3431a45e027106c4c716aa2d9a0ed6478b3405bcb57ab06f',
      votingAddress: 'yPy4GgBgSt2XhFkKCx88sJYaABz6w94Ter',
      isValid: true,
    },
    {
      proRegTxHash: '455b547bb4e923acf6333e3142d1b79a1b21ad493c63e285c35f277c88b3c0f4',
      confirmedHash: '000016ec9d001a782d88758f46a38847d7f5127f81bf4d1d52f456e691885c4b',
      service: '52.43.140.86:20001',
      pubKeyOperator: '0209d35706fbc77a51d31d05f4338dff78c505486297e1bbf8bc4a76c8b63fcbecefb6bbb64afcfa7eb1ac74bb36bcb0',
      votingAddress: 'ydgQUrgdPfWxcDQM3Gvy4n6SJ4Mpfaqi2p',
      isValid: true,
    },
    {
      proRegTxHash: '28d86952a1cb11b93b44179b7e461f9e495f593625061c634432277423e327d4',
      confirmedHash: '00000eefe1cedc451725cee0c13a9f00d00f161d7b763381540ca81794623c45',
      service: '35.89.73.170:20001',
      pubKeyOperator: '0001f5c96bb385a9c7cb70e3108aaf9878b78aa23938afdcfef2810a003df68238bb11985b77011d0a7f88b760889d9b',
      votingAddress: 'ydRipsg3Y8gQ3BH51Wa6SBYH4UbWq2EufJ',
      isValid: true,
    },
    {
      proRegTxHash: 'cd4408c93a70c9867a98d58de2ba59223d5c3595d671ba278768e159cfd79e34',
      confirmedHash: '000017dd0692d81505aa11400ea923ff78935d9e6d099ed90d98326c1c1c8a59',
      service: '35.160.69.130:20001',
      pubKeyOperator: '88a1f4dc25de331451aa9ff6302df52c70ac9ab3305c72b4ed7644381cad08f3fb1b13ece303be8861cb51ffe0912d67',
      votingAddress: 'yZNXi2sdbKw3q3NS6BJ7BDPqHohT7WwFq6',
      isValid: true,
    },
    {
      proRegTxHash: '7dbf5fe4054208e4c291bf11efa50b9ee7bffdfea6eb0c173014b0d1e88b6234',
      confirmedHash: '00000c17c2b7f648f8996056991c5050fb0f3044c0a74ce63e808949748e7060',
      service: '34.209.149.21:20001',
      pubKeyOperator: '0cc722ac6a142aab9688b726a63ac50781452eb04dde0866e17d737458c61e82f89978cd22b46a1ce729d1906a80cdf2',
      votingAddress: 'ycs7tRs7GGNJLcqXvPgh8HcdGPBYptsTsR',
      isValid: true,
    },
  ],
  deletedQuorums: [],
  newQuorums: [
    {
      version: 1,
      llmqType: 101,
      quorumHash: '00000235acaad85cb429d3d3738380fdbad54a62c778243329ac0e85e9fe6246',
      quorumIndex: 0,
      signersCount: 11,
      signers: 'df0f',
      validMembersCount: 12,
      validMembers: 'ff0f',
      quorumPublicKey: '171454d87dbed06c1d21d015360520bf597aa0680aad9634ca26531fe7d562db1359287ec15f6aef7f95d958d1b6053f',
      quorumVvecHash: 'cf1cbb60e77248fb069849bd4dae3e008c1be6bb3ef8f443e740f2bcd46e2740',
      quorumSig: '0025d7a0ce8af1e9aa973b5377aa126ec64575cac9e8a76523dc8392d54a5a86ee2a2c77e76e1a3a58da7481171199b5155e700869948472dbec15c83d21386f8e975231e80edf675e47c7dbdddfb500c30e2f464156396cb1736ae6a97f67fc',
      membersSig: '06cf0c148ada4f3edf7e4f6fd7c85f9583917c69ebe2623604a62a4623017d0b407af2b862c1863bcd07ae983af2876316fdf8ca089fec414db735627ca8299433d5cfcbcb381745231190009e47e2542f2038f251ad530c8f3eb7ac1d768cd8',
    },
    {
      version: 1,
      llmqType: 101,
      quorumHash: '0000023338c0b7e3cad7ba8dc215e66d72e1cab576b49b60301d55c87dbda079',
      quorumIndex: 0,
      signersCount: 12,
      signers: 'ff0f',
      validMembersCount: 12,
      validMembers: 'ff0f',
      quorumPublicKey: '902ce689beaa8a37373527458e895e472d428a58cd39283a2cfaeaf5c9ca15edf020f4a73a47cbb8cc46036a25002450',
      quorumVvecHash: '7387045318cc302b829f297c212e5d9a01a0c7c5845679c39ca9cb84a033d5f3',
      quorumSig: '817553150ee276bc6db4157b0621aec244fd60074106a47b4ea2e492e90425b8dfc52f89e6637e9697c33e0bd39734c70f9957efd530d08c2af50c3114a88b838c7ad28362f2fad0bf0e435df3d327dddf8d0d1f061fa2f0a007acf029677681',
      membersSig: '8e234578fcaaa5209b0193035af85e268eda497af9d618e5044329c8b1627f315d1facc712656df2bd5793ccdc4dc422031394593be92822f2f739f8940d4f641790b18542c89fa31daaf83ae5864565f44858619cf47800ddbf46696dc36e3f',
    },
    {
      version: 1,
      llmqType: 101,
      quorumHash: '0000013017cf3789a746f48a530a6aca0ae3ed5c61e8d2eccaaa6241d880149f',
      quorumIndex: 0,
      signersCount: 12,
      signers: 'ff0f',
      validMembersCount: 12,
      validMembers: 'ff0f',
      quorumPublicKey: '8e226205ec978e9cea558f660a1d7c94bcddf1a5dfe4d7e6988c52c4f90f36fd2f678bc64975577b0605a4656e6c9aed',
      quorumVvecHash: '6da8bbe23839f8b68a60a854fc2ab8ca6137a60dc45292f796daefc6880f89f1',
      quorumSig: '8987b814ad1554eeca876e7b27be9480455abf866f46c35fec7291f43d3ad87189c8064ed54ec4849c61031665570a8d17de1cda96db181750f151cee00b37ebc1d7b5c14a7c5779716aedbeff6647989907a6a5ef9bf745153978f819779611',
      membersSig: '9284aa9f351fd2355eae288d340112d5e75362d5bf185c90e292f6a24b87c1ed0a75e2e43176bd01cb675bea029f96c917be99ba65da7d278f35084d7efd25519dbdd6d162463a15955450ec3337031ceeaf5e494243a3f27f75d96879e1c688',
    },
    {
      version: 1,
      llmqType: 101,
      quorumHash: '000002689db9739f18ef05392ee3480af7997a919916e26354634d46799373eb',
      quorumIndex: 0,
      signersCount: 12,
      signers: 'ff0f',
      validMembersCount: 12,
      validMembers: 'ff0f',
      quorumPublicKey: '0592f435b88b86244bfac0c29b43470ab21dc32bf28e802a4cc5b1f037097a70159010720e1c7365e482de8706cf0bb7',
      quorumVvecHash: '543e6dacebfae025c7020a1620ab88a8da971467271e951a9d7beb7e5a42725d',
      quorumSig: '0f725fdc9db1fb621d1ee3287e0369f8214807041253fa4e4687c51edcaf6f6ec650dbaf4eb71efe36ac4c0eec02831d0bcfcb0d4e9a95e62a49405f8b18db61a8a888cf8ff324bcd8513807caab69dc64d639e7f99718352eb7adc6b0741e5a',
      membersSig: '04815452dbb926e98fb696ec5d180ebb8b4e15e6db7518397596a730addc436d865811555faf3c12bf2f3fa110434b7712334f595ecb6f9cdd69b9c9a04a5b6191c1060e630e6f316b1edfa4f70243152d95cce8ffd83620e9c967cd9484579f',
    },
  ],
  merkleRootMNList: '17b5e1d7371d8339e65dd90391e83b30b62ae9feafb4eee83f73599c5599255a',
  merkleRootQuorums: '7ec72eb4a6b50d75afd4968d03f3417427124c2de9c63c0cddaa16275e5e1cbf',
};

describe('SimplifiedMNList', function () {
  describe('applyDiff', function () {
    it('should apply diff', function () {
      const network = 'testnet';

      const diff = new SimplifiedMNListDiff(rawDiff, network)

      new SimplifiedMNList(diff);
    });
  });
});