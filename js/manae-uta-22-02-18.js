$('#table').bootstrapTable({
  search: 'true',
  pagination: 'true',
  pageList: '[10, 25, 50, 100, all]',
  columns: [
  // {
  //   field: 'start',
  //   title: '',
  //   sortable: 'true'
  // },
  {
    field: 'title',
    title: '<span>曲名</span><span>(Title)</span>',
    sortable: 'true'
  }, {
    field: 'artist',
    title: '<span>アーティスト</span><span>(Artist)</span>',
    sortable: 'true'
  },
  // {
  //   field: 'genre',
  //   title: '<span>ジャンル</span><span>(Genre)</span>',
  //   sortable: 'true'
  // },
  {
    field: 'date',
    title: '<span>最後に歌った</span><span>(Last sung)</span>',
    sortable: 'true'
  }, {
    field: 'link',
    title: '<span>リンク</span><span>(Link)</span>'
  }],
  data: [
  // #228 2022-02-17
  {
    date: '2022-02-17',
    start: 'た',
    title: '<span>ただ君に晴れ</span><span>Tada Kimi ni Hare</span><span>Just a Sunny Day for You</span>',
    artist: '<span>ヨルシカ</span><span>Yorushika</span>',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/c5-Roo2T4O0?t=1009" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/Uo9oA3_tMkY?t=666" target="_blank" rel="noopener noreferrer">Piano</a></span>'
  }, {
    date: '2022-02-17',
    start: 'と',
    title: '<span>ドライフラワー</span><span>Dry Flower</span>',
    artist: '<span>優里</span><span>Yuuri</span>',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/c5-Roo2T4O0?t=1619" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/Me8E174sJ1E" target="_blank" rel="noopener noreferrer">Real</a></span>'
  }, {
    date: '2022-02-17',
    start: 'れ',
    title: '<span>恋愛裁判</span><span>Renai Saiban</span><span>Love Trial</span>',
    artist: '40mP',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/c5-Roo2T4O0?t=2105" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-17',
    start: 'し',
    title: '<span>幸せ。</span><span>Shiawase.</span>',
    artist: 'CHiCO with HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/c5-Roo2T4O0?t=2570" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-17',
    start: 'し',
    title: '<span>幸せ</span><span>Shiawase</span>',
    artist: 'back number',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/c5-Roo2T4O0?t=2994" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-17',
    start: 'す',
    title: '<span>水平線</span><span>Suiheisen</span>',
    artist: 'back number',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/c5-Roo2T4O0?t=3736" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/Uo9oA3_tMkY?t=6443" target="_blank" rel="noopener noreferrer">Piano</a></span>'
  }, {
    date: '2022-02-17',
    start: 'た',
    title: '<span>ダーリンダンス</span><span>Darling Dance</span>',
    artist: '<span>かいりきベア</span><span>Kairiki Bear</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/c5-Roo2T4O0?t=4526" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-17',
    start: 'こ',
    title: '<span>粉雪</span><span>Konayuki</span>',
    artist: '<span>レミオロメン</span><span>Remioromen</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/c5-Roo2T4O0?t=5440" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-17',
    start: 'ち',
    title: '<span>チューリングラブ feat. Sou</span><span>Turing Love feat. Sou</span>',
    artist: '<span>ナナヲアカリ</span><span>Nanawo Akari</span>',
    genre: '',
    link: '<a href="https://youtu.be/c5-Roo2T4O0?t=5994" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-17',
    start: 'は',
    title: '<span>白日</span><span>Hakujitsu</span>',
    artist: 'King Gnu',
    genre: '',
    link: '<a href="https://youtu.be/c5-Roo2T4O0?t=6507" target="_blank" rel="noopener noreferrer">1 Chorus</a>'
  }, {
    date: '2022-02-17',
    start: 'ら',
    title: '<span>ライオン</span><span>Lion</span>',
    artist: 'シェリル・ノーム starring May\'n, ランカ・リー=中島愛',
    genre: 'Anime',
    link: '<a href="https://youtu.be/c5-Roo2T4O0?t=6798" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-17',
    start: 'へ',
    title: '<span>別の人の彼女になったよ</span><span>Betsu no Hito no Kanojo ni Natta yo</span>',
    artist: 'wacci',
    genre: '',
    link: '<a href="https://youtu.be/c5-Roo2T4O0?t=7327" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-17',
    start: 'ま',
    title: '<span>瞬き</span><span>Mabataki</span>',
    artist: 'back number',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/c5-Roo2T4O0?t=8003" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-17',
    start: 'ゆ',
    title: '<span>夕日坂</span><span>Yuuhizaka</span>',
    artist: 'doriko',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/c5-Roo2T4O0?t=8538" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/X-wfRLgaII4" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-02-17',
    start: 'ね',
    title: '<span>願星</span><span>NegaiBoshi</span>',
    artist: ' natica (なちか)',
    genre: '神曲',
    link: '<span><a href="https://youtu.be/c5-Roo2T4O0?t=9209" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/KgAXCEkm9hk" target="_blank" rel="noopener noreferrer">Short MV</a></span>'
  },
  // 2022-02-13 #227
  {
    date: '2022-02-13',
    start: 'ね',
    title: '<span>猫</span><span>Neko</span>',
    artist: 'DISH//',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/9akWmjTet1Y?t=633" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-13',
    start: 'た',
    title: '<span>たぶん</span><span>Tabun</span><span>Probably</span>',
    artist: 'YOASOBI',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/9akWmjTet1Y?t=1201" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-13',
    start: 'は',
    title: '</span>ハッピーエンド</span><span>Happy End</span>',
    artist: 'back number',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/9akWmjTet1Y?t=2578" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/tUd5GMHzaX8" target="_blank" rel="noopener noreferrer"><MV></a></span>'
  }, {
    date: '2022-02-13',
    start: 'こ',
    title: '<span>ごめんなんか聞きたくなかった</span><span>Gomen Nanka Kikitakunakatta</span>',
    artist: '<span>HoneyWorks &</span><span>こはならむ (Kohana Lam)</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/9akWmjTet1Y?t=3130" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-13',
    start: 'よ',
    title: '<span>夜空。 feat. ハジ</span><span>Yozora. feat Hazzie</span>',
    artist: 'miwa',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/9akWmjTet1Y?t=4337" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-13',
    start: 'く',
    title: '<span>繰り返し一粒 ミク版</span><span>Kurikaeshi Hitotsubu Miku ver</span>',
    artist: '<span>猫虫P</span><span>Nekomushi-P</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/9akWmjTet1Y?t=4883" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-13',
    start: 'れ',
    title: 'rain stops, good-bye',
    artist: '<span>におP</span><span>Nio-P</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/9akWmjTet1Y?t=5413" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-13',
    start: 'ふ',
    title: '<span>フラレガイガール</span><span>Furaregai Girl</span>',
    artist: '<span>さユり</span><span>Sayuri<span>',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/9akWmjTet1Y?t=6759" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/rMkbaqdtgCo" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-02-13',
    start: 'し',
    title: 'Just Be Friends',
    artist: 'Dixie Flatline',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/9akWmjTet1Y?t=7662" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/Uo9oA3_tMkY?t=3850" target="_blank" rel="noopener noreferrer">Piano</a></span>'
  }, {
    date: '2022-02-13',
    start: 'た',
    title: '<span>たばこ</span><span>Tabako</span>',
    artist: '<span>コレサワ</span><span>Koresawa</span>',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/9akWmjTet1Y?t=8475" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/wspDX8exBvI" target="_blank" rel="noopener noreferrer">MV</a></span>'
  },
  // 2022-02-11 #226
  {
    date: '2022-02-11',
    start: 'か',
    title: '<span>カタオモイ</span><span>Kataomoi</span>',
    artist: 'Aimer',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/YSL9AAvpuC4?t=723" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-11',
    start: 'い',
    title: '<span>言って。</span><span>Itte. (Say It.)</span>',
    artist: '<span>ヨルシカ</span><span>Yorushika</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/YSL9AAvpuC4?t=1393" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-11',
    start: 'し',
    title: '<span>シル・ヴ・プレジデント</span><span>S\'il Vous President</span>',
    artist: '<span>P丸様。</span><span>Pmarusama.</span>',
    genre: '',
    link: '<span><a href="https://youtu.be/YSL9AAvpuC4?t=1834" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/mWoZaBPQ6eg" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-02-11',
    start: 'め',
    title: 'Mela!',
    artist: '<span>緑黄色社会</span><span>Ryokuoushoku Shakai</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/YSL9AAvpuC4?t=2378" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-11',
    start: 'し',
    title: '<span>白雪姫</span><span>Shirayukihime</span><span>Snow White</span>',
    artist: 'Flower',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/YSL9AAvpuC4?t=3080" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-11',
    start: 'お',
    title: '<span>踊</span><span>Odo</span>',
    artist: 'Ado',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/YSL9AAvpuC4?t=3584" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-11',
    start: 'さ',
    title: '<span>残響散歌</span><span>Zankyou Sanka</span>',
    artist: 'Aimer',
    genre: 'JPOP, Anime',
    link: '<a href="https://youtu.be/YSL9AAvpuC4?t=4022" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-11',
    start: 'さ',
    title: 'SAKURA',
    artist: '<span>いきものがかり</span><span>Ikimonogakari</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/YSL9AAvpuC4?t=4403" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-11',
    start: 'へ',
    title: 'Henceforth',
    artist: 'Orangestar',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/YSL9AAvpuC4?t=5062" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2022-02-11',
    start: 'ろ',
    title: '<span>炉心融解</span><span>Roshin Yuukai</span><span>Meltdown</span>',
    artist: 'iroha (sasaki)',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/YSL9AAvpuC4?t=5390" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2022-02-11',
    start: 'ま',
    title: '<span>回る空うさぎ</span><span>Mawaru Sora Usagi</span>',
    artist: 'Orangestar',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/YSL9AAvpuC4?t=5611" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/Uo9oA3_tMkY?t=2419" target="_blank" rel="noopener noreferrer">Piano</a></span>'
  }, {
    date: '2022-02-11',
    start: 'か',
    title: '<span>カワクヲアメク</span><span>Kawaki wo Ameku</span><span>Crying for Rain</span>',
    artist: '<span>美波</span><span>Minami</span>',
    genre: 'JPOP, Anime',
    link: '<a href="https://youtu.be/YSL9AAvpuC4?t=6284" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-11',
    start: 'ふ',
    title: '<span>フォニイ</span><span>Phony</span>',
    artist: '<span>ツミキ</span><span>Tsumiki</span>',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/YSL9AAvpuC4?t=6916" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/xQr-w1mynLA" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-02-11',
    start: 'は',
    title: '<span>ハム太郎とっとこうた</span><span>Hamtaro Tottoko Uta</span>',
    artist: '<span>ハムちゃんず</span><span>Ham-Hams</span>',
    genre: 'Anime, 神曲',
    link: '<a href="https://youtu.be/YSL9AAvpuC4?t=7508" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-11',
    start: 'あ',
    title: '<span>愛言葉Ⅲ</span><span>Ai Kotoba III</span>',
    artist: 'DECO*27',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/YSL9AAvpuC4?t=8853" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #225 2022-02-09 vocaloids shibari
  {
    date: '2022-02-09',
    start: 'し',
    title: '<span>シャルル</span><span>Charles (Sharuru)</span>',
    artist: '<span>バルーン</span><span>balloon</span>',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/tBv1-Y5a2Y8?t=540" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/AiOyRLPGEQY" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-02-09',
    start: 'へ',
    title: '<span>ベノム</span><span>Venom</span>',
    artist: '<span>かいりきベア</span><span>Kairiki Bear</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/tBv1-Y5a2Y8?t=1149" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-09',
    start: 'あ',
    title: '<span>アイロニ</span><span>Irony</span>',
    artist: '<span>すこっぷ</span><span>Scop</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/tBv1-Y5a2Y8?t=1655" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-09',
    start: 'ま',
    title: '<span>またねがあれば</span><span>Mata ne ga Areba</span>',
    artist: '<span>ちんまりP</span><span>Chinmari-P</span>',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/tBv1-Y5a2Y8?t=2142" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/qPz-B8KM5dU" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-02-09',
    start: 'こ',
    title: '<span>恋空予報</span><span>Koizora Yohou</span>',
    artist: '<span>koyori (電ポルP)</span><span>Denpol-P</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/tBv1-Y5a2Y8?t=3515" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-09',
    start: 'こ',
    title: '<span>こちら、幸福安心委員会です。</span><span>Kochira, Koufuku Anshin Iinkai desu.</span>',
    artist: '<span>うたたP</span><span>UtataP</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/tBv1-Y5a2Y8?t=3958" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-09',
    start: 'き',
    title: 'KING',
    artist: 'Kanaria',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/tBv1-Y5a2Y8?t=4686" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/MnPb80FBKXM" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-02-09',
    start: 'も',
    title: '<span>妄想感傷代償連盟</span><span>Mousou Kanshou Daishou Renmei (MKDR)</span><span>Delusion Sentiment Compensation Federation (DSCF)</span>',
    artist: 'DECO*27',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/tBv1-Y5a2Y8?t=5323" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/S97zozlpgKg" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-02-09',
    start: 'か',
    title: 'Calc.',
    artist: '<span>ジミーサムP (OneRoom)</span><span>JimmyThumb-P</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/tBv1-Y5a2Y8?t=5967" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-09',
    start: 'ろ',
    title: '<span>ロキ</span><span>Roki</span>',
    artist: '<span>みきとP</span><span>mikitoP</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/tBv1-Y5a2Y8?t=6604" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-09',
    start: 'よ',
    title: '<span>夜もすがら君想ふ</span><span>Yomosugara Kimi Omou</span>',
    artist: '<span>TOKOTOKO(西沢さんP)</span><span>Nishizawa-sanP</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/tBv1-Y5a2Y8?t=7169" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #224 2022-02-04
  {
    date: '2022-02-04',
    start: 'の',
    title: '<span>ノーチラス</span><span>Nautilus</span>',
    artist: '<span>ヨルシカ</span><span>Yorushika</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/3Io13KAKylc?t=915" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-04',
    start: 'あ',
    title: '<span>甘い病</span><span>Amai Yamai</span><span>Sweet Sick</span>',
    artist: '<span>なつめ千秋</span><span>Natsume Chiaki</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/3Io13KAKylc?t=..." target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-04',
    start: 'し',
    title: 'Jellyfish',
    artist: '<span>まなえ</span><span>manae</span>',
    genre: '神曲',
    link: '<span><a href="https://youtu.be/3Io13KAKylc?t=2100" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/7rmcGP6EMlM" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-02-04',
    start: 'は',
    title: '<span>ハロ／ハワユ</span><span>Hello How are You</span>',
    artist: '<span>ほえほえP (ナノウ)</span><span>Hoehoe-P (Nanou)</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/3Io13KAKylc?t=2571" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-04',
    start: 'あ',
    title: '<span>アヤノの幸福理論</span><span>Ayano no Koufuku Riron</span>',
    artist: '<span>じん</span><span>Jin</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/3Io13KAKylc?t=4252" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-04',
    start: 'い',
    title: 'if',
    artist: '<span>西野カナ</span><span>Nishino Kana</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/3Io13KAKylc?t=4797" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-02-04',
    start: 'よ',
    title: '<span>夜明けと蛍</span><span>Yoake to Hotaru</span>',
    artist: 'n-buna',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/3Io13KAKylc?t=6140" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #223 2022-01-27 gojuuon SA
  {
    date: '2022-01-27',
    start: 'さ',
    title: '<span>さくらんぼ</span><span>Sakuranbo</span>',
    artist: '<span>大塚愛</span><span>Otsuka Ai</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/ECuxgm59opE?t=871" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-27',
    start: 'さ',
    title: '<span>365日の紙飛行機</span><span>365 Nichi no Kamihikouki</span>',
    artist: 'AKB48',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/ECuxgm59opE?t=1559" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-27',
    start: 'さ',
    title: '<span>サマータイムレコード</span><span>Summertime Record</span>',
    artist: '<span>じん</span><span>Jin</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/ECuxgm59opE?t=2071" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-27',
    start: 'さ',
    title: '<span>残酷な天使のテーゼ</span><span>Zankoku na Tenshi no Teeze</span><span>A Cruel Angel\'s Thesis</span>',
    artist: '<span>高橋洋子</span><span>Takahashi Youko</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/ECuxgm59opE?t=2556" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-27',
    start: 'さ',
    title: '<span>三原色</span><span>Sangenshoku (RGB)</span>',
    artist: 'YOASOBI',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/ECuxgm59opE?t=3733" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-27',
    start: 'さ',
    title: '<span>桜色舞うころ</span><span>Sakurairo Mau Koro</span>',
    artist: '<span>中島美嘉</span><span>Nakashima Mika</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/ECuxgm59opE?t=4297" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-27',
    start: 'さ',
    title: '<span>さよならメモリーズ</span><span>Sayonara Memories</span>',
    artist: 'supercell',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/ECuxgm59opE?t=4904" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #222 2022-01-22 honeyworks shibari
  {
    date: '2022-01-22',
    start: 'ひ',
    title: '<span>ヒロイン育成計画</span><span>Heroine Ikusei Keikaku</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/Vu-KUVKo89Q?t=599" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-22',
    start: 'か',
    title: '<span>可愛くなりたい</span><span>Kawaiku Naritai</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<span><a href="https://youtu.be/Vu-KUVKo89Q?t=1197" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/JmupmdpeySs" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-01-22',
    start: 'な',
    title: 'No.1',
    artist: '<span>mona (夏川椎菜)</span><span>(Natsukawa Shiina)</span>',
    genre: '',
    link: '<a href="https://youtu.be/Vu-KUVKo89Q?t=1716" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-22',
    start: 'し',
    title: '<span>シス×ラブ</span><span>Sis×Love</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/Vu-KUVKo89Q?t=2306" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-22',
    start: 'た',
    title: '<span>大嫌いなはずだった。</span><span>Daikirai na Hazu Datta.</span>',
    artist: '<span>HoneyWorks &</span><span>めいちゃん (Meychan)</span>',
    genre: '',
    link: '<a href="https://youtu.be/Vu-KUVKo89Q?t=2798" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-22',
    start: 'お',
    title: '<span>推し★ごと</span><span>Oshi★goto</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<span><a href="https://youtu.be/Vu-KUVKo89Q?t=4074" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/fmxgpo7-MoI" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-01-22',
    start: 'と',
    title: '<span>同担☆拒否</span><span>Doutan☆Kyohi</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/Vu-KUVKo89Q?t=4467" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-22',
    start: '',
    title: '<span>誇り高きアイドル</span><span>Hokori Takaki Idol</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<span><a href="https://youtu.be/Vu-KUVKo89Q?t=5231" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/HDfm7lgRsEg" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-01-22',
    start: 'せ',
    title: '<span>世界は恋に落ちている</span><span>Sekai wa Koi ni Ochiteiru</span>',
    artist: 'CHiCO with HoneyWorks',
    genre: '',
    link: '<span><a href="https://youtu.be/Vu-KUVKo89Q?t=6755" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/ppmmcpt0tUI" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-01-22',
    start: 'ふ',
    title: '<span>ファンサ</span><span>Fansa</span>',
    artist: '<span>mona (夏川椎菜)</span><span>(Natsukawa Shiina)</span>',
    genre: '',
    link: '<a href="https://youtu.be/Vu-KUVKo89Q?t=7682" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #221 2022-01-20
  {
    date: '2022-01-20',
    start: 'あ',
    title: '<span>アンコール</span><span>Encore</span>',
    artist: 'YOASOBI',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/5EPOfv5fCJU?t=908" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-20',
    start: 'て',
    title: '<span>天体観測</span><span>Tentai Kansoku</span>',
    artist: 'BUMP OF CHICKEN',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/5EPOfv5fCJU?t=2320" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/5EPOfv5fCJU?t=4663" target="_blank" rel="noopener noreferrer">Piano</a></span>'
  }, {
    date: '2022-01-20',
    start: 'わ',
    title: '<span>わたがし</span><span>Watagashi</span>',
    artist: 'back number',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/5EPOfv5fCJU?t=2898" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-20',
    start: 'し',
    title: '<span>少女レイ</span><span>Shoujo Rei</span>',
    artist: '<span>みきとP</span><span>mikitoP</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/5EPOfv5fCJU?t=3324" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-20',
    start: 'う',
    title: '<span>ヴァンパイア</span><span>Vampire</span>',
    artist: 'DECO*27',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/5EPOfv5fCJU?t=3822" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/aGsZVeyrIuM" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-01-20',
    start: 'ち',
    title: '<span>小さな恋のうた</span><span>Chiisana Koi no Uta</span>',
    artist: 'MONGOL800',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/5EPOfv5fCJU?t=4196" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-20',
    start: 'く',
    title: '<span>群青</span><span>Gunjou (Ultramarine)</span>',
    artist: 'YOASOBI',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/5EPOfv5fCJU?t=4570" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-20',
    start: 'あ',
    title: '<span>茜さす</span><span>Akane Sasu</span>',
    artist: 'Aimer',
    genre: 'JPOP, Anime',
    link: '<a href="https://youtu.be/5EPOfv5fCJU?t=5893" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-20',
    start: 'ふ',
    title: '<span>ふたりごと</span><span>Futarigoto</span>',
    artist: 'RADWIMPS',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/5EPOfv5fCJU?t=7223" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-20',
    start: 'ゆ',
    title: '<span>雪の音</span><span>Yuki no Ne</span>',
    artist: 'GReeeeN',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/5EPOfv5fCJU?t=7663" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-20',
    start: 'は',
    title: '<span>ハレ晴レユカイ</span><span>Hare Hare Yukai</span>',
    artist: '<span>涼宮ハルヒの憂鬱</span><span>The Melancholy of Haruhi Suzumiya Cast</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/5EPOfv5fCJU?t=8130" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-20',
    start: 'く',
    title: '<span>クリスマスソング</span><span>Christmas Song</span>',
    artist: 'back number',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/5EPOfv5fCJU?t=8638" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/72QvC3NnBSc" target="_blank" rel="noopener noreferrer">MV</a></span><span><a href="https://youtu.be/Z2wZnmnVtGQ" target="_blank" rel="noopener noreferrer">Real</a></span>'
  }, {
    date: '2022-01-20',
    start: 'す',
    title: '<span>すーぱーぬこになりたい</span><span>Super Nuko ni Naritai</span>',
    artist: '<span>まふまふ</span><span>Mafumafu</span>',
    genre: '',
    link: '<a href="https://youtu.be/5EPOfv5fCJU?t=1277" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2022-01-20',
    start: 'な',
    title: '<span>なにやってもうまくいかない</span><span>Nani Yattemo Umaku Ikanai</span><span>Nothing\'s Working Out</span>',
    artist: 'meiyo',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/5EPOfv5fCJU?t=5615" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtube.com/shorts/YYHmb_RKlY0" target="_blank" rel="noopener noreferrer">Short</a></span>'
  },
  // #220 2022-01-15
  {
    date: '2022-01-15',
    start: 'お',
    title: '<span>おじゃま虫</span><span>Ojama Mushi (Stickybug)</span>',
    artist: 'DECO*27',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/rVrAAuBO4PU?t=1480" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-15',
    start: 'ひ',
    title: '<span>ひまわりの約束</span><span>Himawari no Yakusoku</span>',
    artist: '<span>秦基博</span><span>Hata Motohiro</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/rVrAAuBO4PU?t=2002" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-15',
    start: 'お',
    title: '<span>お願いマッスル</span><span>Onegai Muscle</span>',
    artist: '<span>ファイルーズあい & 石川界人</span><span>Fairouz Ai & Ishikawa Kaito</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/rVrAAuBO4PU?t=2458" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-15',
    start: 'ろ',
    title: '<span>ロミオとシンデレラ</span><span>Romeo to Cinderella</span>',
    artist: 'doriko',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/rVrAAuBO4PU?t=4958" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/psT4VdMsICs" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-01-15',
    start: 'き',
    title: '<span>金木犀</span><span>Kinmokusei</span><span>Osmanthus</span>',
    artist: '<span>くじら</span><span>Kujira</span><span>WhaleDontSleep</span>',
    genre: '',
    link: '<span><a href="https://youtu.be/rVrAAuBO4PU?t=5548" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/W_27JMUeLFw" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-01-15',
    start: 'え',
    title: '<span>エミリーと15の約束</span><span>Emily to 15 no Yakusoku</span>',
    artist: 'majiko',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/rVrAAuBO4PU?t=5823" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/D_VbzjKwzAQ" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-01-15',
    start: 'わ',
    title: '1・2・3',
    artist: 'After the Rain',
    genre: 'Anime',
    link: '<a href="https://youtu.be/rVrAAuBO4PU?t=6294" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-15',
    start: 'あ',
    title: 'adrenaline!!!',
    artist: 'TrySail',
    genre: 'Anime',
    link: '<a href="https://youtu.be/rVrAAuBO4PU?t=7267" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-15',
    start: 'か',
    title: '<span>神っぽいな</span><span>Kamippoi na (God-ish)</span>',
    artist: '<span>ピノキオP</span><span>PinocchioP</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/rVrAAuBO4PU?t=1275" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #219 2022-01-12 piano shibari
  {
    date: '2022-01-12',
    start: 'い',
    title: '<span>いかないで</span><span>Ikanaide</span>',
    artist: '<span>想太</span><span>Sohta</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/Uo9oA3_tMkY?t=1109" target="_blank" rel="noopener noreferrer">Piano</a>'
  }, {
    date: '2022-01-12',
    start: 'よ',
    title: '<span>夜に駆ける</span><span>Yoru ni Kakeru</span><span>Racing into the Night</span>',
    artist: 'YOASOBI',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/Uo9oA3_tMkY?t=1673" target="_blank" rel="noopener noreferrer">Piano</a>'
  }, {
    date: '2022-01-12',
    start: 'あ',
    title: '<span>藍二乗</span><span>Ai Nijou</span>',
    artist: '<span>ヨルシカ</span><span>Yorushika</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/Uo9oA3_tMkY?t=2779" target="_blank" rel="noopener noreferrer">Piano</a>'
  }, {
    date: '2022-01-12',
    start: 'は',
    title: '<span>ハナミズキ</span><span>Hanamizuki</span>',
    artist: '<span>一青窈</span><span>Hitoto You</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/Uo9oA3_tMkY?t=3262" target="_blank" rel="noopener noreferrer">Piano</a>'
  }, {
    date: '2022-01-12',
    start: 'れ',
    title: 'Lemon',
    artist: '<span>米津玄師</span><span>Yonezu Kenshi</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/Uo9oA3_tMkY?t=5254" target="_blank" rel="noopener noreferrer">Piano</a>'
  }, {
    date: '2022-01-12',
    start: 'し',
    title: '<span>贖罪</span><span>Shokuzai</span>',
    artist: '<span>傘村トータ</span><span>Kasamura Toota</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/Uo9oA3_tMkY?t=5821" target="_blank" rel="noopener noreferrer">Piano</a>'
  },
  // #218 2022-01-08
  {
    date: '2022-01-08',
    start: 'よ',
    title: '<span>ヨワネハキ feat. 和ぬか, asmi</span><span>Yowane Haki feat. Wanuka, asmi</span>',
    artist: 'MAISONdes',
    genre: '',
    link: '<a href="https://youtu.be/UcH3TlTWrOw?t=5368" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-08',
    start: 'ひ',
    title: '<span>ヒッチコック</span><span>Hitchcock</span>',
    artist: '<span>ヨルシカ</span><span>Yorushika</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/UcH3TlTWrOw?t=5760" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-08',
    start: 'あ',
    title: '<span>貴方解剖純愛歌 ～死ね～</span><span>Anata Kaibou Junaika ~Shine~</span>',
    artist: '<span>あいみょん</span><span>Aimyon</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/UcH3TlTWrOw?t=6617" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-08',
    start: 'は',
    title: '<span>灰色と青</span><span>Haiiro to Ao</span>',
    artist: '<span>米津玄師 + 菅田将暉</span><span>Yonezu Kenshi + Suda Masaki</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/UcH3TlTWrOw?t=7215" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-08',
    start: 'お',
    title: 'ORION',
    artist: '<span>中島美嘉</span><span>Nakashima Mika</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/UcH3TlTWrOw?t=8365" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-08',
    start: 'お',
    title: '<span>オリオンをなぞる</span><span>Orion wo Nazoru</span>',
    artist: 'UNISON SQUARE GARDEN',
    genre: 'JPOP, Anime',
    link: '<a href="https://youtu.be/UcH3TlTWrOw?t=8863" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-08',
    start: 'し',
    title: '<span>シュガーソングとビターステップ</span><span>Sugar Song and Bitter Step</span>',
    artist: 'UNISON SQUARE GARDEN',
    genre: 'Anime',
    link: '<a href="https://youtu.be/UcH3TlTWrOw?t=10044" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-08',
    start: 'ゆ',
    title: '<span>幽霊東京</span><span>Yuurei Tokyo</span>',
    artist: 'Ayase',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/UcH3TlTWrOw?t=10795" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-08',
    start: 'お',
    title: 'orion',
    artist: '<span>米津玄師</span><span>Yonezu Kenshi</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/UcH3TlTWrOw?t=11314" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-08',
    start: 'あ',
    title: '<span>アイネクライネ</span><span>Eine Kleine</span>',
    artist: '<span>米津玄師</span><span>Yonezu Kenshi</span>',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/UcH3TlTWrOw?t=11953" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/BMGFfg4Kpqc" target="_blank" rel="noopener noreferrer">MV</a></span>'
  },
  // #217 2022-01-05 vocaloids shibari?
  {
    date: '2022-01-05',
    start: 'め',
    title: '<span>メランコリック</span><span>Melancholic</span>',
    artist: 'Junky',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/oacuV-TB8AY?t=732" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-05',
    start: 'わ',
    title: '<span>我儘姫</span><span>Wagamama Hime</span>',
    artist: '<span>ふじを</span><span>Fujiwo</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/oacuV-TB8AY?t=2590" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-05',
    start: 'ゆ',
    title: '<span>夕景イエスタデイ</span><span>Yuukei Yesterday</span>',
    artist: '<span>じん</span><span>Jin</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/oacuV-TB8AY?t=3583" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-05',
    start: 'え',
    title: '<span>エンヴィーベイビー</span><span>Envy Baby</span>',
    artist: 'Kanaria',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/oacuV-TB8AY?t=4237" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-05',
    start: 'ら',
    title: '<span>ラプンツェル</span><span>Rapunzel</span>',
    artist: 'n-buna',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/oacuV-TB8AY?t=4571" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-05',
    start: 'も',
    title: '<span>妄想税</span><span>Mousou Zei</span>',
    artist: 'DECO*27',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/oacuV-TB8AY?t=5055" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/VKrj170gimQ" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-01-05',
    start: 'あ',
    title: '<span>天ノ弱</span><span>Amanojaku</span>',
    artist: '164',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/oacuV-TB8AY?t=6219" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/lFNMQuo4CA0" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-01-05',
    start: 'お',
    title: '<span>乙女海防</span><span>Otome Kaibou</span>',
    artist: 'DECO*27',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/oacuV-TB8AY?t=6695" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/3xGFtRlPHOs" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2022-01-05',
    start: 'こ',
    title: '<span>心做し</span><span>Kokoronashi</span>',
    artist: '<span>蝶々P (papiyon)</span><span>Chouchou-P</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/oacuV-TB8AY?t=7412" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #216 2022-01-02
  {
    date: '2022-01-02',
    start: 'ふ',
    title: 'Pretender',
    artist: '<span>Official髭男dism</span>Official HIGE DANdism<span></span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/RnDUBA7t57Y?t=4534" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-02',
    start: 'せ',
    title: '<span>星間飛行</span><span>Seikan Hikou</span>',
    artist: '<span>ランカ・リー=中島愛</span><span>Ranka Lee = Nakajima Megumi</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/RnDUBA7t57Y?t=5295" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-02',
    start: 'ほ',
    title: '<span>炎</span><span>Homura</span>',
    artist: 'LiSA',
    genre: 'Anime',
    link: '<a href="https://youtu.be/RnDUBA7t57Y?t=5838" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2022-01-02',
    start: 'ち',
    title: '<span>蝶々結び</span><span>Chouchou Musubi</span>',
    artist: 'Aimer',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/RnDUBA7t57Y?t=6416" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #215 2021-12-29
  {
    date: '2021-12-29',
    start: 'は',
    title: '<span>花に亡霊</span><span>Hana ni Bourei</span>',
    artist: '<span>ヨルシカ</span><span>Yorushika</span>',
    genre: 'JPOP, Anime',
    link: '<a href="https://youtu.be/-sKGaKRBNI0?t=1839" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-29',
    start: 'ゆ',
    title: '<span>雪の華</span><span>Yuki no Hana</span>',
    artist: '<span>中島美嘉</span><span>Nakashima Mika</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/-sKGaKRBNI0?t=4314" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-29',
    start: 'き',
    title: '<span>ギラギラ</span><span>Gira Gira</span>',
    artist: 'Ado',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/-sKGaKRBNI0?t=5636" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-29',
    start: 'し',
    title: '<span>10月無口な君を忘れる</span><span>10 Gatsu Mukuchi na Kimi wo Wasureru</span>',
    artist: '<span>あたらよ</span><span>Atarayo</span>',
    genre: '神曲, JPOP',
    link: '<span><a href="https://youtu.be/-sKGaKRBNI0?t=6718" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/EMXW827o4qE" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-12-29',
    start: 'し',
    title: '<span>シンデレラ</span><span>Cinderella</span>',
    artist: 'DECO*27',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/-sKGaKRBNI0?t=7465" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/lADvBoZSubM" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-12-29',
    start: 'か',
    title: '<span>奏 (かなで)</span><span>Kanade</span>',
    artist: '<span>スキマスイッチ</span><span>Sukima Switch</span>',
    genre: 'JPOP, Anime',
    link: '<span><a href="https://youtu.be/-sKGaKRBNI0?t=9985" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/MPs-hlFXYyw" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-12-29',
    start: 'あ',
    title: '<span>アニマル</span><span>Animal</span>',
    artist: 'DECO*27',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/-sKGaKRBNI0?t=7724" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #214 2021-12-24
  {
    date: '2021-12-24',
    start: 'ふ',
    title: 'Booo!',
    artist: '<span>TOKOTOKO (西沢さんP)</span><span>Nishizawa-sanP</span>',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/IeyPbRMp2rU?t=2270" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/K5X7U7hGtn0" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-12-24',
    start: 'に',
    title: '<span>ニア</span><span>Near (Nia)</span>',
    artist: '<span>夏代孝明</span><span>Natsushiro Takaaki</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/IeyPbRMp2rU?t=3213" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-24',
    start: 'か',
    title: '<span>風になる</span><span>Kaze ni Naru</span>',
    artist: '<span>つじあやの</span><span>Tsuji Ayano</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/IeyPbRMp2rU?t=8856" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-24',
    start: 'は',
    title: '<span>初めての恋が終わる時</span><span>Hajimete no Koi ga Owaru Toki</span>',
    artist: 'ryo (supercell)',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/IeyPbRMp2rU?t=10935" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-24',
    start: 'そ',
    title: '<span>空色デイズ</span><span>Sorairo Days</span>',
    artist: '<span>中川翔子</span><span>Nakagawa Shoko</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/IeyPbRMp2rU?t=13527" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-24',
    start: 'う',
    title: 'We Wish You a Merry Christmas',
    artist: '',
    genre: '',
    link: '<a href="https://youtu.be/IeyPbRMp2rU?t=1928" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-12-24',
    start: 'き',
    title: '<span>きらきら星</span><span>Kira Kira Boshi</span><span>Twinkle Twinkle Little Star</span>',
    artist: '',
    genre: '',
    link: '<a href="https://youtu.be/IeyPbRMp2rU?t=2093" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-12-24',
    start: 'さ',
    title: 'Silent Night',
    artist: '',
    genre: '',
    link: '<a href="https://youtu.be/IeyPbRMp2rU?t=2651" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-12-24',
    start: 'き',
    title: '<span>きよしこの夜</span><span>Kiyoshi Kono Yoru</span>',
    artist: '',
    genre: '',
    link: '<a href="https://youtu.be/IeyPbRMp2rU?t=2733" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #213 2021-12-22
  {
    date: '2021-12-22',
    start: 'さ',
    title: '<span>さようなら、花泥棒さん</span><span>Sayonara, Hanadorobou-san</span>',
    artist: '<span>メル</span><span>Mel</span>',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/-L2GOcos2pA?t=2425" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/tq6VPe4pRuk" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-12-22',
    start: 'て',
    title: '<span>てねてね</span><span>Tenetene</span>',
    artist: '<span>悒うつぼ</span><span>uutubo</span>',
    genre: '',
    link: '<a href="https://youtu.be/-L2GOcos2pA?t=3425" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-22',
    start: 'ふ',
    title: 'flos',
    artist: 'R Sound Design',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/-L2GOcos2pA?t=4925" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-22',
    start: 'ひ',
    title: '<span>翡翠のまち</span><span>Hisui no Machi</span>',
    artist: '<span>メル</span><span>Mel</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/-L2GOcos2pA?t=7024" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // Twitcast
  {
    date: '<span>2021-12-19</span><span>2021-11-30</span>',
    start: 'て',
    title: '<span>Departures ～あなたにおくるアイの歌～</span><span>Departures ~Anata ni Okuru Ai no Uta~</span>',
    artist: 'EGOIST',
    genre: '神曲, Anime',
    link: '<span><a href="https://twitcasting.tv/manae_nme/movie/713984130" target="_blank" rel="noopener noreferrer">TwitCasting</a></span><span><a href="https://youtu.be/iMulRwlYplA?t=4770" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/RmmKQQAtg6M?t=3896" target="_blank" rel="noopener noreferrer">Full</a></span>'
  }, 
  // #212 2021-12-17
  {
    date: '2021-12-17',
    start: 'き',
    title: '<span>君色に染まる</span><span>Kimiiro ni Somaru</span>',
    artist: '<span>TOKOTOKO (西沢さんP)</span><span>NishizawasanP</span>',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/8kBFgKLrRVw?t=1448" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/imFPfhlfoPU" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-12-17',
    start: 'ほ',
    title: '<span>僕が死のうと思ったのは</span><span>Boku ga Shinou to Omotta no wa</span>',
    artist: '<span>中島美嘉</span><span>Nakashima Mika</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/8kBFgKLrRVw?t=2613" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-17',
    start: 'ひ',
    title: '<span>ヒーロー</span><span>Hero</span>',
    artist: 'supercell',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/8kBFgKLrRVw?t=3195" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-17',
    start: 'め',
    title: '<span>メルト</span><span>Melt</span>',
    artist: 'ryo (supercell)',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/8kBFgKLrRVw?t=3962" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-17',
    start: 'は',
    title: '<span>ハルジオン</span><span>Halzion</span>',
    artist: 'YOASOBI',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/8kBFgKLrRVw?t=5142" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-17',
    start: 'た',
    title: '<span>大正浪漫</span><span>Taisho Roman (Romance)</span>',
    artist: 'YOASOBI',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/8kBFgKLrRVw?t=5728" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/FlPTg6AJAjs" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-12-17',
    start: 'し',
    title: '<span>secret base ～君がくれたもの～</span><span>secret base ~Kimi ga Kureta Mono~</span>',
    artist: 'ZONE',
    genre: 'JPOP, Anime',
    link: '<a href="https://youtu.be/8kBFgKLrRVw?t=7184" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #211 2021-12-16 fuyu shibari
  {
    date: '2021-12-16',
    start: 'ほ',
    title: '<span>星が瞬くこんな夜に</span><span>Hoshi ga Matataku Konna Yoru ni</span>',
    artist: 'supercell',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/8in0bB2P08E?t=3888" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-16',
    start: 'し',
    title: '<span>白い雪のプリンセスは</span><span>Shiroi Yuki no Princess wa</span>',
    artist: '<span>のぼる↑P</span><span>Noboru↑P</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/8in0bB2P08E?t=5940" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #210 2021-12-14 acappellabu
  {
    date: '2021-12-14',
    start: 'く',
    title: '<span>紅蓮華</span><span>Gurenge</span>',
    artist: 'LiSA',
    genre: 'Anime',
    link: '<span><a href="https://youtu.be/R5jegDtV6zA?t=3043" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/d0Exjmu3uuQ?t=791" target="_blank" rel="noopener noreferrer">Full</a></span>'
  }, {
    date: '2021-12-14',
    start: 'は',
    title: '<span>花ハ踊レヤいろはにほ</span><span>Hana wa Odore ya Iroha ni Ho</span>',
    artist: '<span>チーム“ハナヤマタ”</span><span>Team "Hanayamata"</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/R5jegDtV6zA?t=3972" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-12-14',
    start: 'ち',
    title: 'CHE.R.RY',
    artist: 'YUI',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/R5jegDtV6zA?t=7731" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-12-14',
    start: 'れ',
    title: 'Let it go',
    artist: 'Idina Menzel',
    genre: '',
    link: '<a href="https://youtu.be/R5jegDtV6zA?t=8109" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-12-14',
    start: 'ろ',
    title: '<span>ロストワンの号哭</span><span>Rosuto Wan no Goukoku</span><span>Lost One\'s Weeping</span>',
    artist: 'Neru',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/R5jegDtV6zA?t=8713" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-12-14',
    start: 'い',
    title: '<span>イエスタデイ</span><span>Yesterday</span>',
    artist: '<span>Official髭男dism</span><span>Official HIGE DANdism</span>',
    genre: 'JPOP, Anime',
    link: '<a href="https://youtu.be/R5jegDtV6zA?t=7485" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #209 2021-12-11
  {
    date: '2021-12-11',
    start: 'は',
    title: '<span>春を告げる</span><span>Haru wo Tsugeru</span>',
    artist: 'yama',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/Ol0_wlrVBWc?t=1856" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-11',
    start: 'あ',
    title: 'again',
    artist: 'YUI',
    genre: 'JPOP, Anime',
    link: '<a href="https://youtu.be/Ol0_wlrVBWc?t=3974" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-11',
    start: 'は',
    title: '<span>春泥棒</span><span>Haru Dorobou</span><span>Spring Thief</span>',
    artist: '<span>ヨルシカ</span><span>Yorushika</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/Ol0_wlrVBWc?t=4516" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-11',
    start: 'き',
    title: '<span>ぎゅっと。</span><span>Gyutto.</span>',
    artist: '<span>もさを。</span><span>Mosawo</span>',
    genre: '',
    link: '<a href="https://youtu.be/Ol0_wlrVBWc?t=5868" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-11',
    start: 'ふ',
    title: 'First Love',
    artist: '<span>宇多田ヒカル</span><span>Utada Hikaru</span>',
    genre: '',
    link: '<a href="https://youtu.be/Ol0_wlrVBWc?t=9163" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-11',
    start: 'し',
    title: '<span>宿命</span><span>Shukumei</span>',
    artist: '<span>Official髭男dism</span><span>Official HIGE DANdism</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/Ol0_wlrVBWc?t=10535" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-11',
    start: 'あ',
    title: '<span>ありがとう</span><span>Arigatou</span>',
    artist: '<span>いきものがかり</span><span>Ikimonogakari</span>',
    genre: '',
    link: '<a href="https://youtu.be/Ol0_wlrVBWc?t=926" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #208 2021-12-08 gojuuon KO
  {
    date: '2021-12-08',
    start: 'こ',
    title: '<span>香水</span><span>Kousui</span>',
    artist: '<span>瑛人</span><span>Eito</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/k82sRzxwZgQ?t=962" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-08',
    start: 'こ',
    title: '<span>恋人失格</span><span>Koibito Shikkaku</span>',
    artist: '<span>コレサワ</span><span>Koresawa</span>',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/k82sRzxwZgQ?t=2030" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/tvWoHywdfqE" target="_blank" rel="noopener noreferrer">Real</a></span>'
  }, {
    date: '2021-12-08',
    start: 'こ',
    title: '<span>恋色に咲け</span><span>Koiiro ni Sake</span>',
    artist: 'CHiCO with HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/k82sRzxwZgQ?t=3040" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-08',
    start: 'く',
    title: '<span>紅蓮の弓矢</span><span>Guren no Yumiya</span>',
    artist: 'Linked Horizon',
    genre: 'Anime',
    link: '<a href="https://youtu.be/k82sRzxwZgQ?t=4154" target="_blank" rel="noopener noreferrer">Full?</a>'
  },
  // #207 2021-12-07 acappellabu
  {
    date: '2021-12-07',
    start: 'や',
    title: '<span>優しさの理由</span><span>Yasashisa no Riyuu</span>',
    artist: 'ChouCho',
    genre: 'Anime',
    link: '<a href="https://youtu.be/8DNDTEbVKqM?t=3645" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-12-07',
    start: 'た',
    title: '<span>たからもの</span><span>Takaramono</span>',
    artist: '<span>河野万里奈</span><span>Kawano Marina</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/8DNDTEbVKqM?t=5629" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-12-07',
    start: 'と',
    title: '<span>ドレミファロンド</span><span>Do Re Mi Fa Rondo</span>',
    artist: '40mP',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/8DNDTEbVKqM?t=6775" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '<span>2021-12-07</span><span></span>',
    start: 'こ',
    title: '<span>ゴーストルール</span><span>Ghost Rule</span>',
    artist: 'DECO*27',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/8DNDTEbVKqM?t=1903" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/Za29uUI2YVc?t=3680" target="_blank" rel="noopener noreferrer">A cappella</a></span>'
  }, {
    date: '<span>2021-12-07</span><span>2021-10-01</span>',
    start: 'ふ',
    title: '<span>プロローグ</span><span>Prologue</span>',
    artist: 'Uru',
    genre: '',
    link: '<span><a href="https://youtu.be/8DNDTEbVKqM?t=449" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/82pMyys415Y?t=4908" target="_blank" rel="noopener noreferrer">A cappella</a></span>'
  }, 
  // #206 2021-12-03
  {
    date: '2021-12-03',
    start: 'こ',
    title: '<span>コネクト</span><span>Connect</span>',
    artist: 'ClariS',
    genre: 'Anime',
    link: '<a href="https://youtu.be/J49qB8BBvN0?t=2173" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-03',
    start: 'え',
    title: '<span>エイリアンエイリアン</span><span>Alien Alien</span>',
    artist: '<span>ナユタン星人</span><span>NayutalieN</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/J49qB8BBvN0?t=4307" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-12-03',
    start: 'せ',
    title: '<span>センチメンタルな愛慕心</span><span>Sentimental na Aiboshin</span>',
    artist: '<span>なつめ千秋</span><span>Natsume Chiaki</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/J49qB8BBvN0?t=5543" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-03',
    start: 'ひ',
    title: '<span>115万キロのフィルム</span><span>115 man Kilo no Film</span>',
    artist: '<span>Official髭男dism</span><span>Official Hige DANdism</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/J49qB8BBvN0?t=6630" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-12-03',
    start: 'そ',
    title: '<span>創聖のアクエリオン</span><span>Sousei no Aquarion</span><span>Genesis of Aquarion</span>',
    artist: 'AKINO',
    genre: 'Anime',
    link: '<a href="https://youtu.be/J49qB8BBvN0?t=8611" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #205 2021-12-01 piano shibari
  {
    date: '2021-12-01',
    start: 'あ',
    title: '<span>雨とカプチーノ</span><span>Ame to Cappuccino</span><span>Rain with Cappuccino</span>',
    artist: '<span>ヨルシカ</span><span>Yorushika</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/3I_ATFvjjs4?t=2862" target="_blank" rel="noopener noreferrer">Piano</a>'
  }, {
    date: '2021-12-01',
    start: 'ひ',
    title: '<span>秒針を噛む</span><span>Byoushin wo Kamu</span>',
    artist: '<span>ずっと真夜中でいいのに。</span><span>ZUTOMAYO</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/3I_ATFvjjs4?t=4924" target="_blank" rel="noopener noreferrer">Piano</a>'
  }, {
    date: '2021-12-01',
    start: 'て',
    title: '<span>点描の唄 (feat.井上苑子)</span><span>Tenbyou no Uta (feat. Inoue Sonoko)</span>',
    artist: 'Mrs. GREEN APPLE',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/3I_ATFvjjs4?t=6194" target="_blank" rel="noopener noreferrer">Piano</a></span><span><a href="https://youtu.be/aFJAkgsyHWQ" target="_blank" rel="noopener noreferrer">MV</a></span>'
  },
  // #204 2021-11-30 acappellabu
  {
    date: '2021-11-30',
    start: 'れ',
    title: '<span>恋愛サーキュレーション</span><span>Renai Circulation</span>',
    artist: '<span>千石撫子 (花澤香菜)</span><span>Sengoku Nadeko (Hanazawa Kana)</span>',
    genre: 'Anime',
    link: '<span><a href="https://youtu.be/iMulRwlYplA?t=917" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/Xt0Qx8IZ1xY?t=2293" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/DZoP8qaddzo" target="_blank" rel="noopener noreferrer">Short MV</a></span>'
  }, {
    date: '2021-11-30',
    start: 'ふ',
    title: '<span>フリージア</span><span>Freesia</span>',
    artist: 'Uru',
    genre: 'Anime',
    link: '<span><a href="https://youtu.be/iMulRwlYplA?t=5568" target="_blank" rel="noopener noreferrer">A cappella</a></span>'
  }, {
    date: '2021-11-30',
    start: 'い',
    title: '<span>いけないボーダーライン</span><span>Ikenai Borderline</span>',
    artist: '<span>ワルキューレ</span><span>Walküre</span>',
    genre: 'Anime',
    link: '<span><a href="https://youtu.be/iMulRwlYplA?t=7340" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/mkvLPUOOUig?t=3167" target="_blank" rel="noopener noreferrer">Full</a></span>'
  },
  // #203 2021-11-27 anisong shibari
  {
    date: '2021-11-27',
    start: 'ひ',
    title: '<span>ヒトリゴト</span><span>Hitorigoto</span>',
    artist: 'ClariS',
    genre: 'Anime',
    link: '<a href="https://youtu.be/RmmKQQAtg6M?t=577" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-27',
    start: 'か',
    title: '<span>怪物</span><span>Kaibutsu (Monster)</span>',
    artist: 'YOASOBI',
    genre: 'JPOP, Anime',
    link: '<a href="https://youtu.be/RmmKQQAtg6M?t=1043" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-27',
    start: 'は',
    title: '<span>春擬き</span><span>Haru Modoki</span>',
    artist: '<span>やなぎなぎ</span><span>Yanagi Nagi</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/RmmKQQAtg6M?t=1854" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-27',
    start: 'た',
    title: '<span>タッチ</span><span>Touch</span>',
    artist: '<span>岩崎良美</span><span>Iwasaki Yoshimi</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/RmmKQQAtg6M?t=4458" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-27',
    start: 'か',
    title: '<span>カラフル</span><span>Colorful</span>',
    artist: 'ClariS',
    genre: 'Anime',
    link: '<a href="https://youtu.be/RmmKQQAtg6M?t=4827" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-27',
    start: 'と',
    title: '<span>トライアングラー</span><span>Triangler</span>',
    artist: '<span>坂本真綾</span><span>Sakamoto Maaya</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/RmmKQQAtg6M?t=5324" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #202 2021-11-26 gojuuon KU
  {
    date: '2021-11-26',
    start: 'く',
    title: '<span>グッバイ宣言</span><span>Goodbye Sengen</span><span>Goodbye Declaration</span>',
    artist: 'Chinozo',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/d0Exjmu3uuQ?t=1222" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-26',
    start: 'け',
    title: '<span>月曜日の憂鬱</span><span>Getsuyoubi no Yuutsu</span>',
    artist: '<span>HoneyWorks &</span><span>天月-あまつき- (Amatsuki)</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/d0Exjmu3uuQ?t=1773" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-26',
    start: 'く',
    title: '<span>クライヤ</span><span>Crier (Kuraiya)</span>',
    artist: '<span>すこっぷ</span><span>Scop</span>',
    genre: 'Vocalodis',
    link: '<span><a href="https://youtu.be/d0Exjmu3uuQ?t=2247" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/R495rW7pWpI" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-11-26',
    start: 'く',
    title: '<span>靴の花火</span>Kutsu no Hanabi<span></span><span>Fireworks Beneath My Shoes</span>',
    artist: '<span>ヨルシカ</span><span>Yorushika</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/d0Exjmu3uuQ?t=2724" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-26',
    start: 'く',
    title: '<span>くらべられっ子</span>Kuraberarekko<span></span><span>Compared Child</span>',
    artist: '<span>つゆ</span><span>TUYU</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/d0Exjmu3uuQ?t=3324" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-26',
    start: 'く',
    title: '<span>雲と幽霊</span><span>Kumo to Yuurei</span><span>The Clouds and the Ghost</span>',
    artist: '<span>ヨルシカ</span><span>Yorushika</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/d0Exjmu3uuQ?t=3919" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #201 2021-11-24
  {
    date: '2021-11-24',
    start: 'き',
    title: '<span>君はロックを聴かない</span><span>Kimi wa Rock wo Kikanai</span>',
    artist: '<span>あいみょん</span><span>Aimyon</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/hAfNGyIpLHY?t=3734" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-24',
    start: 'き',
    title: '<span>君の彼女</span><span>Kimi no Kanojo</span>',
    artist: '<span>TOKOTOKO (西沢さんP)</span><span>NishizawasanP</span>',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/hAfNGyIpLHY?t=5067" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/yQGxT_l2Z3Q" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-11-24',
    start: 'く',
    title: '<span>黒毛和牛上塩タン焼680円</span><span>Kuroge Wagyu Joshio Tanyaki 680 en</span>',
    artist: '<span>大塚愛</span><span>Otsuka Ai</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/hAfNGyIpLHY?t=5558" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #200 HAMTARO!!!
  // #199 2021-11-20
  {
    date: '2021-11-20',
    start: 'た',
    title: '<span>だから僕は音楽を辞めた</span><span>Dakara Boku wa Ongaku wo Yameta</span><span>That\'s Why I Gave Up on Music</span>',
    artist: '<span>ヨルシカ</span><span>Yorushika</span>',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/4Zyd02TAWeI?t=4818" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/9mnL41NXtro" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-11-20',
    start: 'え',
    title: '<span>エリート</span><span>Elite</span>',
    artist: 'Chinozo',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/4Zyd02TAWeI?t=4134" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #198 2021-11-19
  {
    date: '2021-11-19',
    start: 'た',
    title: '<span>ダイアモンド クレバス</span><span>Diamond Crevasse</span>',
    artist: '<span>シェリル・ノーム starring May\'n</span><span>Sheryl Nome starring May\'n</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/TSn8uXRl8X8?t=2815" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-19',
    start: 'お',
    title: '<span>女の子になりたい</span><span>Onna no Ko ni Naritai</span>',
    artist: '<span>まふまふ</span><span>Mafumafu</span>',
    genre: '',
    link: '<a href="https://youtu.be/TSn8uXRl8X8?t=6084" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #197 2021-11-17 bokaro shibari
  {
    date: '2021-11-17',
    start: 'い',
    title: '<span>インタビュア</span><span>Interviewer</span>',
    artist: '<span>クワガタP</span><span>Kuwagata-P</span>',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/yET0U3Dx1Ws?t=2562" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/MgSlA3P7BJk" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-11-17',
    start: 'つ',
    title: '<span>ツギハギスタッカート</span><span>Tsugihagi Staccato</span>',
    artist: '<span>とあ</span><span>Toa</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/yET0U3Dx1Ws?t=3151" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-17',
    start: 'い',
    title: '<span>命に嫌われている。</span><span>Inochi ni Kirawarete Iru.</span><span>Hated by Life Itself.</span>',
    artist: '<span>カンザキイオリ</span><span>Kanzaki Iori</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/yET0U3Dx1Ws?t=4402" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-17',
    start: 'せ',
    title: '<span>千本桜</span><span>Senbonzakura</span>',
    artist: '<span>黒うさP (WhiteFlame)</span><span>KurousaP</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/yET0U3Dx1Ws?t=5686" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-17',
    start: 'め',
    title: '<span>メリュー</span><span>Mairieux (Meryuu)</span>',
    artist: 'n-buna',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/yET0U3Dx1Ws?t=6409" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/dGFssLlHl08" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-11-17',
    start: 'と',
    title: '<span>東京テディベア</span><span>Tokyo Teddy Bear</span>',
    artist: 'Neru',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/yET0U3Dx1Ws?t=1191" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/36A6DZ6GHTE" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-11-17',
    start: 'て',
    title: '<span>テロル</span><span>Terror</span>',
    artist: 'Neru',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/yET0U3Dx1Ws?t=1335" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-11-17',
    start: 'す',
    title: '<span>スキスキ絶頂症</span><span>Suki Suki Zecchoushou</span>',
    artist: '<span>koyori (電ポルP)</span><span>Denpol-P</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/yET0U3Dx1Ws?t=3773" target="_blank" rel="noopener noreferrer">A cappellaFull</a>'
  },
  // #196 2021-11-16 acappellabu
  {
    date: '2021-11-16',
    start: 'わ',
    title: '<span>私へ</span><span>Watashi e</span>',
    artist: 'supercell',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/3019" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '<span>2021-11-16</span><span>2021-10-16</span>',
    start: 'か',
    title: '<span>からくりピエロ</span><span>Karakuri Pierrot</span>',
    artist: '40mP',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/6414" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/vm0GmgUnJlc?t=3835" target="_blank" rel="noopener noreferrer">Full</a></span>'
  }, {
    date: '2021-11-16',
    start: 'し',
    title: '<span>深海少女</span><span>Shinkai Shoujo</span><span>Deep-Sea Girl</span>',
    artist: '<span>ゆうゆP</span><span>Yuuyu-P</span>',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/6744" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/4sS5vKbG4WE" target="_blank" rel="noopener noreferrer">MV</a></span>'
  },
  // #195 2021-11-13 shitsuren shibari
  {
    date: '2021-11-13',
    start: 'め',
    title: '<span>メトロノーム</span><span>Metronome</span>',
    artist: '<span>米津玄師</span><span>Yonezu Kenshi</span>',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/jUnE8b7QhBA?t=5851" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/2j5LF99xc7Q" target="_blank" rel="noopener noreferrer">MV</a></span>'
  },
  // #194 2021-11-10
  {
    date: '2021-11-10',
    start: 'よ',
    title: '<span>吉原ラメント</span><span>Yoshiwara Lament</span>',
    artist: '<span>小山乃舞世, 亜沙</span><span>Oyamano Mayo, Asa</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/Y79KfndxDcQ?t=3635" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-11-10',
    start: 'め',
    title: '<span>メンヘラじゃないもん！</span><span>Menhera Janai Mon!</span>',
    artist: '<span>勇魚</span><span>Isana</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/Y79KfndxDcQ?t=4959" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #193 2021-11-09 acappellabu
  {
    date: '2021-11-09',
    start: 'さ',
    title: '<span>さくら (独唱)</span><span>Sakura (Solo)</span>',
    artist: '<span>森山直太朗</span><span>Moriyama Naotarou</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/uTzniUz0HVg?t=1625" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-11-09',
    start: 'つ',
    title: '<span>翼をください</span><span>Tsubasa wo Kudasai</span>',
    artist: '',
    genre: '',
    link: '<a href="https://youtu.be/uTzniUz0HVg?t=4117" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-11-09',
    start: 'と',
    title: '<span>東京サマーセッション</span><span>Tokyo Summer Session</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<span><a href="https://youtu.be/uTzniUz0HVg?t=6398" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/uIcvElYJ-hA" target="_blank" rel="noopener noreferrer">Collab MV</a></span>'
  }, {
    date: '<span>2021-11-09</span><span>2021-10-29</span>',
    start: 'う',
    title: '<span>うっせえわ</span><span>Usseewa</span>',
    artist: 'Ado',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/uTzniUz0HVg?t=7453" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/P-0eBsPb4L8?t=4080" target="_blank" rel="noopener noreferrer">Full</a></span>'
  },
  // #192 2021-11-05
  {
    date: '2021-11-05',
    start: 'こ',
    title: '<span>恋</span><span>Koi</span>',
    artist: '<span>星野源</span><span>Hoshino Gen</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/qUlmhidcy50?t=6177" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-05',
    start: 'ふ',
    title: '<span>プライド革命</span><span>Pride Kakumei</span>',
    artist: 'CHiCO with HoneyWorks',
    genre: 'Anime',
    link: '<a href="https://youtu.be/qUlmhidcy50?t=7279" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-05',
    start: 'か',
    title: '<span>かいしんのいちげき！</span><span>Kaishin no Ichigeki!</span>',
    artist: '<span>天月-あまつき-</span><span>Amatsuki</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/qUlmhidcy50?t=7919" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #191 2021-11-03 gojuuon KI
  {
    date: '2021-11-03',
    start: 'き',
    title: '<span>金魚花火</span><span>Kingyo Hanabi</span>',
    artist: '<span>大塚愛</span><span>Otsuka Ai</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/PylM7hVCQR8?t=2893" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-03',
    start: 'き',
    title: '<span>気まぐれロマンティック</span><span>Kimagure Romantic</span>',
    artist: '<span>いきものがかり</span><span>Ikimonogakari</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/PylM7hVCQR8?t=4651" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-03',
    start: 'き',
    title: '<span>キセキ</span><span>Kiseki</span>',
    artist: 'GReeeeN',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/PylM7hVCQR8?t=5206" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-03',
    start: 'き',
    title: '<span>KISSして</span><span>KISS Shite</span>',
    artist: 'KOH+',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/PylM7hVCQR8?t=6001" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-11-03',
    start: 'き',
    title: '<span>気まぐれメルシィ</span><span>Kimagure Mercy</span>',
    artist: '<span>八王子P</span><span>HachiojiP</span>',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/PylM7hVCQR8?t=6926" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/QpaJ1PlfSUg" target="_blank" rel="noopener noreferrer">MV</a></span>'
  },
  // #190 2021-11-02 acappellabu
  {
    date: '<span>2021-11-02</span><span>2021-09-18</span>',
    start: 'お',
    title: 'only my railgun',
    artist: 'fripSide',
    genre: 'Anime',
    link: '<span><a href="https://youtu.be/UrRaXvOGH8E?t=3584" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/1N2JEa8l6eY?t=2477" target="_blank" rel="noopener noreferrer">Full</a></span>'
  }, {
    date: '<span>2021-11-02</span><span>2021-09-25</span>',
    start: 'あ',
    title: '<span>アイのシナリオ</span><span>Ai no Scenario</span>',
    artist: 'CHiCO with HoneyWorks',
    genre: '',
    link: '<span><a href="https://youtu.be/UrRaXvOGH8E?t=7254" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/bMSJEIfHSDs?t=4710" target="_blank" rel="noopener noreferrer">Full</a></span>'
  }, {
    date: '2021-11-02',
    start: 'な',
    title: '<span>名前のない怪物</span><span>Namae no nai Kaibutsu</span>',
    artist: 'EGOIST',
    genre: 'Anime',
    link: '<a href="https://youtu.be/UrRaXvOGH8E?t=531" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-11-02',
    start: 'あ',
    title: 'unravel',
    artist: 'TK from 凛として時雨',
    genre: 'Anime',
    link: '<a href="https://youtu.be/UrRaXvOGH8E?t=3286" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // 189 2021-10-30 halloween
  {
    date: '2021-10-30',
    start: 'は',
    title: 'Happy Halloween',
    artist: 'Junky',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/2XWtY097a0g?t=799" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/UlPmRJnYeo0" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-10-30',
    start: 'う',
    title: '<span>ヴィラン</span><span></span>',
    artist: '<span>てにをは</span><span></span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/2XWtY097a0g?t=2480" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-30',
    start: 'お',
    title: '<span>おじゃま虫Ⅱ</span><span>Ojama Mushi II</span><span>Stickybug II</span>',
    artist: 'DECO*27',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/2XWtY097a0g?t=4198" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-30',
    start: 'み',
    title: '<span>Mrs.Pumpkinの滑稽な夢</span><span>Mrs.Pumpkin no Kokkei na Yume</span><span>Humorous Dream of Mrs. Pumpkin</span>',
    artist: '<span>ハチ</span><span>Hachi</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/2XWtY097a0g?t=4793" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-30',
    start: 'わ',
    title: '<span>ワールドイズマイン</span><span>World is Mine</span>',
    artist: 'DECO*27',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/2XWtY097a0g?t=5475" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-30',
    start: 'は',
    title: '<span>ハロウィンナイトパーティ</span><span>Halloween Night Party</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/2XWtY097a0g?t=6045" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // 187 2021-10-27
  {
    date: '2021-10-27',
    start: 'す',
    title: '<span>水曜日の約束-another story-</span><span>Suiyoubi no Yakusoku -another story-</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/Xpv5ySWq_l0?t=746" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-27',
    start: 'あ',
    title: '<span>愛に出会い恋は続く</span><span>Ai ni Deai Koi wa Tsuzuku</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/Xpv5ySWq_l0?t=2234" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // 186 2021-10-26 acappellabu
  {
    date: '2021-10-26',
    start: 'い',
    title: '<span>一分一秒君と僕の</span><span>Ippun Ichibyou Kimi to Boku no</span>',
    artist: '<span>HoneyWorks meets</span><span>スフィア (Sphere)</span>',
    genre: '',
    link: '<a href="https://youtu.be/pXJtgBiX9zU?t=5888" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-10-26',
    start: 'る',
    title: '<span>ルンがピカッと光ったら</span><span>Rune ga Pikatto Hikattara</span>',
    artist: '<span>ワルキューレ</span><span>Walküre</span>',
    genre: '',
    link: '<a href="https://youtu.be/pXJtgBiX9zU?t=8152" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // 3D 2021-10-23
  // #185 2021-10-22
  {
    date: '2021-10-22',
    start: 'お',
    title: '<span>おねがいダーリン 〜北九州弁Ver.〜</span><span>ONEgai Darlin\' ~Kitakyushu dialect~</span>',
    artist: '<span>ナナホシ管弦楽団</span><span>Nanahoshi Kangengakudan</span>',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/rBAfxHwvVCQ?t=4620" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/MRM7MKJb1iI" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-10-22',
    start: 'き',
    title: '<span>金曜日のおはよう</span><span>Kinyoubi no Ohayou</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: 'Cutted；；'
  }, {
    date: '2021-10-22',
    start: 'う',
    title: '<span>打上花火</span><span>Uchiage Hanabi</span>',
    artist: '<span>DAOKO × 米津 玄師</span><span>DAOKO × Yonezu Kenshi</span>',
    genre: 'JPOP, Anime',
    link: '<a href="https://youtu.be/rBAfxHwvVCQ?t=5889" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-22',
    start: 'あ',
    title: '<span>愛してる</span><span>Aishiteru</span>',
    artist: '<span>高鈴</span><span>Kourin</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/rBAfxHwvVCQ?t=1522" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-10-22',
    start: 'あ',
    title: 'irony',
    artist: 'ClariS',
    genre: '',
    link: '<a href="https://youtu.be/rBAfxHwvVCQ?t=3777" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-10-22',
    start: 'と',
    title: 'TOMORROW',
    artist: '<span>岡本真夜</span><span>Okamoto Mayo</span>',
    genre: '',
    link: '<a href="https://youtu.be/rBAfxHwvVCQ?t=5842" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-10-22',
    start: 'は',
    title: '<span>はじめてのチュウ</span><span>Hajimete no Chuu</span>',
    artist: '<span>あんしんパパ</span><span>Anshin Papa</span>',
    genre: '',
    link: '<a href="https://youtu.be/rBAfxHwvVCQ?t=7019" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #184 2021-10-20
  {
    date: '2021-10-20',
    start: 'た',
    title: '<span>橙ゲノム</span><span>Daidai Genome</span>',
    artist: '<span>めざめP</span><span>MezameP</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/tR3XFs1B5mw?t=2149" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-20',
    start: 'り',
    title: '<span>林檎売りの泡沫少女</span><span>Ringo Uri no Utakata Shoujo</span>',
    artist: 'yukkedoluce',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/tR3XFs1B5mw?t=2605" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-20',
    start: 'ふ',
    title: '<span>フラジール</span><span>Fragile</span>',
    artist: '<span>Lanndo (ぬゆり)</span><span>Nulut</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/tR3XFs1B5mw?t=4220" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-20',
    start: 'あ',
    title: '<span>愛してる</span><span>Aishiteru</span>',
    artist: '<span>れるりり</span><span>rerulili</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/tR3XFs1B5mw?t=8222" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #183 2021-10-19 acappellabu
  {
    date: '<span>2021-10-19</span><span>2021-08-28</span>',
    start: 'ふ',
    title: '<span>プラネタリウム</span><span>大塚愛</span>',
    artist: '<span>Planetarium</span><span>Otsuka Ai</span>',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/7IajXPsspBk?=4620" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/RZRF6fS3OSE?=5297" target="_blank" rel="noopener noreferrer">Full</a></span>'
  }, {
    date: '2021-10-19',
    start: 'ま',
    title: 'My Dearest',
    artist: 'supercell',
    genre: 'Anime',
    link: '<a href="https://youtu.be/7IajXPsspBk?=5422" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-10-19<span>2021-10-19</span><span>2021-07-28</span>',
    start: 'は',
    title: '<span>ハルノヒ</span><span>Harunohi</span>',
    artist: '<span>あいみょん</span><span>Aimyon</span>',
    genre: '',
    link: '<span><a href="https://youtu.be/7IajXPsspBk?=3908" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/16RI3emVlD4?=3270" target="_blank" rel="noopener noreferrer">Full</a></span>'
  }, {
    date: '2021-10-19',
    start: 'つ',
    title: '<span>蕾</span><span>Tsubomi</span>',
    artist: '<span>コブクロ</span><span>Kobukuro</span>',
    genre: '',
    link: '<a href="https://youtu.be/7IajXPsspBk?=4043" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #182 2021-10-16 gojuuon KA
  {
    date: '2021-10-16',
    start: 'か',
    title: '<span>カヌレ</span><span>Canele</span>',
    artist: 'CHiCO with HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/vm0GmgUnJlc?t=602" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-16',
    start: 'か',
    title: '<span>かくしん的☆めたまるふぉ～ぜっ！</span><span>Kakushinteki ☆ Metamaruphose!</span>',
    artist: '<span>田中あいみ</span><span>Tanaka Aimi</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/vm0GmgUnJlc?t=4474" target="_blank" rel="noopener noreferrer">1 Chorus</a>'
  }, {
    date: '2021-10-16',
    start: 'か',
    title: '<span>カブトムシ</span><span>Kabutomushi</span>',
    artist: 'aiko',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/vm0GmgUnJlc?t=5501" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #181 2021-10-15
  {
    date: '2021-10-15',
    start: 'み',
    title: '<span>三日月</span><span>Mikazuki</span>',
    artist: '<span>絢香</span><span>Ayaka</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/mkvLPUOOUig?t=3745" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #181X 2021-10-13
  {
    date: '2021-10-13',
    start: 'う',
    title: '<span>うまぴょい伝説</span><span>Umapyoi Densetsu</span>',
    artist: '<span>ウマ娘</span><span>Uma Musume</span>',
    genre: '',
    link: '<span><a href="https://youtu.be/s0nfIBWCW40?t=6450" target="_blank" rel="noopener noreferrer">Game Size</a></span><span><a href="https://youtu.be/678txbK6seE" target="_blank" rel="noopener noreferrer">MV</a></span>'
  },
  // #180 2021-10-12 acappellabu
  {
    date: '2021-10-12',
    start: 'せ',
    title: '<span>前前前世</span><span>Zenzenzense</span>',
    artist: 'RADWIMPS',
    genre: 'Anime',
    link: '<a href="https://youtu.be/Ra6Bxc4-MFI?=5684" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-12',
    start: 'て',
    title: '<span>てのひらワンダーランド</span><span>Tenohira Wonderland</span>',
    artist: '<span>ササノマリイ (ねこぼーろ)</span><span>sasanomaly (nekobolo)</span>',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/Ra6Bxc4-MFI?=5910" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/dqId-YdZ178" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-10-12',
    start: 'す',
    title: '<span>自傷無色</span><span>Jishou Mushoku</span>',
    artist: '<span>ササノマリイ (ねこぼーろ)</span><span>sasanomaly (nekobolo)</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/Ra6Bxc4-MFI?=5953" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-12',
    start: 'す',
    title: '<span>スパークル</span><span>Sparkle</span>',
    artist: 'RADWIMPS',
    genre: 'Anime',
    link: '<a href="https://youtu.be/Ra6Bxc4-MFI?=5991" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #179 2021-10-09
  // #178 2021-10-08
  {
    date: '2021-10-08',
    start: 'ら',
    title: 'Rising Hope',
    artist: 'LiSA',
    genre: 'Anime',
    link: '<a href="https://youtu.be/ScIt61P5Vg8?=6908" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-08',
    start: 'ゆ',
    title: '<span>有心論</span><span>Yuushinron</span>',
    artist: 'RADWIMPS',
    genre: '',
    link: '<a href="https://youtu.be/ScIt61P5Vg8+/5225" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #177 2021-10-06 acappellabu
  {
    date: '2021-10-06',
    start: 'く',
    title: 'glow',
    artist: 'keeno',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/L99b5tXV1KE?t=4712" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '<span>2021-10-06</span><span>2021-10-01</span>',
    start: 'い',
    title: '<span>糸</span><span>Ito</span>',
    artist: '<span>中島みゆき</span><span>Nakajima Miyuki</span>',
    genre: 'JPOP',
    link: '<span><a href="https://youtu.be/L99b5tXV1KE?t=7356" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/82pMyys415Y?t=7154" target="_blank" rel="noopener noreferrer">Full</a></span>'
  }, {
    date: '2021-10-06',
    start: 'う',
    title: '<span>ウィーゴー！</span><span>We Go!</span>',
    artist: '<span>きただにひろし</span><span>Kitadani Hiroshi</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/L99b5tXV1KE?t=5093" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #176 2021-10-02 aakanji shibari
  {
    date: '2021-10-02',
    start: 'ま',
    title: '<span>丸の内サデスティック</span><span>Marunouchi Sadistic</span>',
    artist: '<span>椎名林檎</span><span>Shiina Ringo</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/IQWcwlG00O8?t=5137" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-02',
    start: 'き',
    title: '<span>君にジュースを買ってあげる</span><span>Kimi ni Juice wo Katte Ageru</span>',
    artist: '<span>グループ魂</span><span>Group Tamashii</span>',
    genre: '',
    link: '<a href="https://youtu.be/IQWcwlG00O8?t=6367" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-10-02',
    start: 'よ',
    title: '<span>夜のピエロ</span><span>Yoru no Pierrot</span>',
    artist: 'Ado',
    genre: '',
    link: '<span><a href="https://youtu.be/IQWcwlG00O8?t=8238" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/s3qvZUGUEmo" target="_blank" rel="noopener noreferrer">Full</a></span>'
  }, {
    date: '2021-10-02',
    start: 'う',
    title: '<span>ウルフ</span><span>Urufu</span>',
    artist: 'CHiCO with HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/IQWcwlG00O8?t=3859" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #175 2021-10-01
  {
    date: '2021-10-01',
    start: 'し',
    title: '<span>死ぬにはいい日だった</span><span>Shinu ni wa Ii Hi Datta</span>',
    artist: '<span>ピコン</span><span>Picon</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/82pMyys415Y?t=ピコン" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #174 2021-09-29
  {
    date: '2021-09-29',
    start: 'あ',
    title: '<span>赤い糸</span><span>Akai Ito</span>',
    artist: '<span>コブクロ</span><span>Kobukuro</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/zDssiir5fVA?t=2392" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-09-29',
    start: 'お',
    title: 'Over Drive',
    artist: 'JUDY AND MARY',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/zDssiir5fVA?t=4842" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #173 2021-09-28 acappellabu
  {
    date: '2021-09-28',
    start: 'は',
    title: '<span>パプリカ</span><span>Paprika</span>',
    artist: '<span>米津玄師</span><span>Yonezu Kenshi</span>',
    genre: '',
    link: '<a href="https://youtu.be/qD-nDEleJHQ?t=2359" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-09-28',
    start: 'は',
    title: 'Perfect Day',
    artist: 'supercell',
    genre: '',
    link: '<a href="https://youtu.be/qD-nDEleJHQ?t=3233" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-09-28',
    start: 'よ',
    title: '<span>弱虫モンブラン</span><span>Yowamushi Mont Blanc</span>',
    artist: 'DECO*27',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/qD-nDEleJHQ?t=7247" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #172 2021-09-25
  {
    date: '2021-09-25',
    start: 'こ',
    title: '<span>告白予行練習</span><span>Kokuhaku Yokou Renshuu</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/bMSJEIfHSDs?t=1427" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-09-25',
    start: 'は',
    title: '<span>初恋の絵本</span><span>Hatsukoi no Ehon</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/bMSJEIfHSDs?t=1908" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-09-25',
    start: 'つ',
    title: '<span>ツインズ</span><span>Twins</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/bMSJEIfHSDs?t=3494" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-09-25',
    start: 'い',
    title: '<span>今好きになる。</span><span>Ima Suki ni Naru.</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: 'Cutted；；'
  },
  // #171 2021-09-24 acappellabu
  {
    date: '2021-09-24',
    start: 'ら',
    title: '<span>ライラック</span><span>Lilac</span>',
    artist: '<span>美波</span><span>Minami</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/I5erE-PVvi8?t=3260" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-09-24',
    start: 'ら',
    title: '<span>ロンリー・バタフライ</span><span>LONELY BUTTERFLY</span>',
    artist: '<span>レベッカ</span><span>REBECCA</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/I5erE-PVvi8?t=3648" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #170 2021-09-22
  {
    date: '2021-09-22',
    start: 'は',
    title: '<span>ハッピーシンセサイザ</span><span>Happy Synthesizer</span>',
    artist: 'EasyPop',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/KY-2YWZdsDw?t=1318" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-09-22',
    start: 'ひ',
    title: '<span>独りんぼエンヴィー</span><span>Hitorinbo Envy</span>',
    artist: '<span>koyori (電ポルP)</span><span>Denpol-P</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/KY-2YWZdsDw?t=2546" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-09-22',
    start: 'な',
    title: '<span>夏恋花火</span><span>Natsukoi Hanabi</span>',
    artist: '40mP',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/KY-2YWZdsDw?t=2973" target="_blank" rel="noopener noreferrer">Full</a></span><span><a href="https://youtu.be/Tf-ufhS-F9Y" target="_blank" rel="noopener noreferrer">Short MV</a></span>'
  }, {
    date: '2021-09-22',
    start: 'わ',
    title: '<span>わたしのアール</span><span></span>',
    artist: '<span>和田たけあき (くらげP))</span><span>Wada Takeaki (Kurage-P)</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/KY-2YWZdsDw?t=3850" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-09-22',
    start: 'は',
    title: '<span>バレリーコ</span><span>Barerii Ko</span>',
    artist: '<span>みきとP</span><span>mikitoP</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/KY-2YWZdsDw?t=4305" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #169 2021-09-21
  // #168 2021-09-18 gojuuon O
  {
    date: '2021-09-18',
    start: 'お',
    title: 'Automatic',
    artist: '<span>宇多田ヒカル</span><span>Utada Hikaru</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/1N2JEa8l6eY?t=4340" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-09-18',
    start: 'お',
    title: '<span>オツキミリサイタル</span><span>Otsukimi Recital</span>',
    artist: '<span>じん</span><span>Jin</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/1N2JEa8l6eY?t=4982" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #167 2021-09-17 acappellabu
  {
    date: '2021-09-17',
    start: 'ふ',
    title: '<span>ブルーバード</span><span>Blue Bird</span>',
    artist: '<span>いきものがかり</span><span>Ikimonogakari</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/iG3AK1LicRQ?t=3417" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-09-17',
    start: 'し',
    title: '<span>シリョクケンサ</span><span>Shiryoku Kensa</span>',
    artist: '40mP',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/iG3AK1LicRQ?t=4868" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-09-17',
    start: 'ら',
    title: 'LOVE & ROLL',
    artist: 'supercell',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/iG3AK1LicRQ?t=7949" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-09-17',
    start: 'ひ',
    title: '<span>ピエロ</span><span>Pierrot (Piero)</span>',
    artist: 'KEI',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/iG3AK1LicRQ?t=7584" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #166 2021-09-15
  {
    date: '2021-09-15',
    start: 'あ',
    title: '<span>暁の車</span><span>Akatsuki no Kuruma</span>',
    artist: 'FictionJunction YUUKA',
    genre: 'Anime',
    link: '<a href="https://youtu.be/CU7l4ERpD8E?t=4247" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-09-15',
    start: 'す',
    title: '<span>スターライトパレード</span><span>Starlight Parade</span>',
    artist: 'SEKAI NO OWARI',
    genre: '',
    link: '<a href="https://youtu.be/CU7l4ERpD8E?t=3876" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #165 2021-09-14
  {
    date: '2021-09-14',
    start: 'あ',
    title: '<span>アスノヨゾラ哨戒班</span><span>Asu no Yozora Shoukaihan</span>',
    artist: 'Orangestar',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/_3MPdojEDFA?t=9648" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #162 2021-09-08
  {
    date: '2021-09-08',
    start: 'た',
    title: '<span>高嶺の花子さん</span><span>Takane no Hanako-san</span>',
    artist: 'back number',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/ELMTHBkO1i4?t=4234" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-09-08',
    start: 'う',
    title: '<span>うたかた花火</span><span>Utakata Hanabi</span>',
    artist: 'supercell',
    genre: 'JPOP, Anime',
    link: '<a href="https://youtu.be/ELMTHBkO1i4?t=5036" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-09-08',
    start: 'ま',
    title: '<span>マリーゴールド</span><span>Marigold</span>',
    artist: '<span>あいみょん</span><span>Aimyon</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/ELMTHBkO1i4?t=5773" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #161 2021-09-07 acappellabu
  {
    date: '2021-09-07',
    start: 'せ',
    title: '<span>センパイ。</span><span>Senpai.</span>',
    artist: 'HoneyWorks meets TrySail',
    genre: '',
    link: '<span><a href="https://youtu.be/FqJufT9Jejw?t=3061" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/65UfcnDjxJA" target="_blank" rel="noopener noreferrer">MV</a></span>'
  }, {
    date: '2021-09-07',
    start: 'な',
    title: '<span>夏色えがおで1,2,Jump!</span><span>Natsuiro Egao de 1, 2, Jump!</span>',
    artist: 'μ\'s',
    genre: '',
    link: '<a href="https://youtu.be/FqJufT9Jejw?t=5443" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #160 2021-09-04 
  {
    date: '2021-09-04',
    start: 'め',
    title: '<span>メーベル</span><span>Mabel</span>',
    artist: '<span>バルーン</span><span>balloon</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/e4K7mMBsds4?t=1462" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-09-04',
    start: 'ら',
    title: '<span>ラブカ？</span><span>Love ka?</span>',
    artist: '<span>柊キライ</span><span>Hiiragi Kirai</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/e4K7mMBsds4?t=3070" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #159 2021-09-03 acappellabu
  {
    date: '2021-09-03',
    start: 'あ',
    title: '<span>あなたがいることで</span><span>Anata ga Iru Koto de</span>',
    artist: 'Uru',
    genre: '',
    link: '<a href="https://youtu.be/EAl1oaJzLRk?t=3786" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-09-03',
    start: 'た',
    title: '<span>ダダダダ天使</span><span>Dadadada Tenshi</span>',
    artist: '<span>ナナヲアカリ</span><span>Nanawo Akari</span>',
    genre: '',
    link: '<a href="https://youtu.be/EAl1oaJzLRk?t=6483" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #158 2021-09-01
  {
    date: '2021-09-01',
    start: 'は',
    title: '<span>パート・オブ・ユア・ワールド</span><span>Part of Your World</span>',
    artist: '',
    genre: '',
    link: '<a href="https://youtu.be/s2pSklkoLuI?t=8842" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #157 2021-08-31 acappella
  {
    date: '2021-08-31',
    start: 'す',
    title: 'sweets parade',
    artist: '<span>花澤香菜</span><span>Hanazawa Kana</span>',
    genre: '',
    link: '<a href="https://youtu.be/6nBMaddp-cM?t=4065" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #156 2021-08-28
  {
    date: '2021-08-28',
    start: 'ち',
    title: '<span>地球最後の告白を</span><span>Chikyuu Saigo no Kokuhaku wo</span>',
    artist: 'kemu',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/RZRF6fS3OSE?t=2738" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-08-28',
    start: 'せ',
    title: '<span>全力少年</span><span>Zenryoku Shounen</span>',
    artist: '<span>スキマスイッチ</span><span>Sukima Switch</span>',
    genre: 'JPOP',
    link: '<a href="https://youtu.be/RZRF6fS3OSE?t=3571" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #155 2021-08-27
  {
    date: '2021-08-27',
    start: 'と',
    title: '<span>トリセツ</span><span>Torisetsu</span>',
    artist: '<span>西野カナ</span><span>Kana Nishino</span>',
    genre: '',
    link: '<span><a href="https://youtu.be/Si_Z-wirgjM?t=7243" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/lhyRm3uen-A?t=1413" target="_blank" rel="noopener noreferrer">Full</a></span>'
  },
  // #154 2021-08-21 gojuuon U E
  {
    date: '2021-08-21',
    start: 'う',
    title: '<span>うそつき</span><span>めざめP</span>',
    artist: '<span>Usotsuki</span><span>Mezame-P</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/nKRR3WlgEyg?t=5168" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #153 2021-08-20 acappellabu
  {
    date: '2021-08-20',
    start: 'は',
    title: '<span>裸の心</span><span>Hadaka no Kokoro</span>',
    artist: '<span>あいみょん</span><span>Aimyon</span>',
    genre: '',
    link: '<span><a href="https://youtu.be/Ybbt868J88g?t=840" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/4WyQhRfRcPU" target="_blank" rel="noopener noreferrer">Real</a></span>'
  }, {
    date: '2021-08-20',
    start: 'な',
    title: '<span>ナイショの話</span><span>Naisho no Hanashi</span>',
    artist: 'ClariS',
    genre: '',
    link: '<a href="https://youtu.be/Ybbt868J88g?t=3075" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #150 2021-08-14
  {
    date: '2021-08-14',
    start: 'な',
    title: '<span>夏祭り</span><span>Natsu Matsuri</span>',
    artist: '<span>ホワイトベリー</span><span>Whiteberry</span>',
    genre: '',
    link: '<a href="https://youtu.be/W9gv0yGpPnQ?t=1046" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #149 2021-08-12 acappellabu
  {
    date: '2021-08-12',
    start: 'し',
    title: '<span>シルシ</span><span>Shirushi</span>',
    artist: 'LiSA',
    genre: '',
    link: '<a href="https://youtu.be/oVfmASjMPug?t=3616" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-08-12',
    start: 'お',
    title: '<span>お気に召すまま</span><span>Oki ni Mesu mama</span><span>As You Like It</span>',
    artist: 'Eve',
    genre: '',
    link: '<a href="https://youtu.be/oVfmASjMPug?t=4500" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-08-12',
    start: 'ち',
    title: '<span>チルノのパーフェクトさんすう教室</span><span>Cirno no Perfect Sansuu Kyoushitsu</span><span>Cirno\'s Perfect Math Class</span>',
    artist: 'IOSYS',
    genre: '',
    link: '<a href="https://youtu.be/oVfmASjMPug?t=5116" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #148 2021-08-11
  {
    date: '2021-08-11',
    start: 'ろ',
    title: '<span>六兆年と一夜物語</span><span>Rokuchou Nen to Ichiya Monogatari</span><span>Six Trillion Years and One Night Story</span>',
    artist: 'kemo',
    genre: '',
    link: '<a href="https://youtu.be/D7H1RMGUzjw?t=3852" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-08-11',
    start: 'こ',
    title: '<span>極楽浄土</span><span>Gokuraku Joudo</span>',
    artist: 'GARNiDELiA',
    genre: '',
    link: '<a href="https://youtu.be/D7H1RMGUzjw?t=3994" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #146 2021-08-01 acappellabu
  {
    date: '2021-08-01',
    start: 'ひ',
    title: '<span>光るなら</span><span>Hikaru Nara</span>',
    artist: 'Goose House',
    genre: 'Anime',
    link: '<a href="https://youtu.be/tICfpkphIoA?t=3848" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-08-01',
    start: 'ち',
    title: '<span>ちっぽけな愛のうた</span><span>Chippoke na Ai no Uta</span>',
    artist: '<span>小笠原秋 × 大原櫻子</span><span>Ogasawara Aki × Ohara Sakurako</span>',
    genre: '',
    link: '<span><a href="https://youtu.be/tICfpkphIoA?t=7940" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/8CTF5X7VwIQ" target="_blank" rel="noopener noreferrer">Real</a></span>'
  }, {
    date: '2021-08-01',
    start: 'き',
    title: '<span>キライ・キライ・ジガヒダイ！</span><span>Kirai Kirai Jiga Hitai!</span>',
    artist: '<span>和田たけあき (くらげP))</span><span>Wada Takeaki (Kurage-P)</span>',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/tICfpkphIoA?t=4188" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/TUjtxW7v7r0" target="_blank" rel="noopener noreferrer">MV</a></span>'
  },
  // #144 2021-07-28
  {
    date: '2021-07-28',
    start: 'わ',
    title: '<span>私、アイドル宣言</span><span>Watashi, Idol Sengen</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/16RI3emVlD4?t=8325" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #141 2021-07-21
  {
    date: '2021-07-21',
    start: 'み',
    title: '<span>右肩の蝶</span><span>Migikata no Chou</span>',
    artist: '<span>のりぴー</span><span>Nori-P</span>',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/sckCeGUdvps?t=5997" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #140 2021-07-18 acappellabu
  {
    date: '2021-07-18',
    start: 'ゆ',
    title: '<span>夢のまた夢</span><span>Yume no Mata Yume</span>',
    artist: '<span>まふまふ</span><span>Mafumafu</span>',
    genre: '',
    link: '<a href="https://youtu.be/nh7w724S82g?t=4750" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #139 2021-07-17 gojuuon A
  {
    date: '2021-07-17',
    start: 'あ',
    title: 'I LOVE...',
    artist: '<span></span><span></span>',
    genre: '',
    link: '<a href="https://youtu.be/FCYdPmBIo24?t=3526" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-07-17',
    start: 'あ',
    title: '<span>曖昧劣情Lover</span><span>Aimai Retsujou Lover</span>',
    artist: '<span>koyori (電ポルP)</span><span>Denpol-P</span>',
    genre: '',
    link: '<a href="https://youtu.be/FCYdPmBIo24?t=5277" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #138 2021-07-15 acappellabu
  {
    date: '2021-07-15',
    start: 'み',
    title: 'Myra',
    artist: 'Tani Yuuki',
    genre: '',
    link: '<a href="https://youtu.be/jCeDJA0MOUg?t=2067" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #134 2021-07-07 tanabata
  {
    date: '<span>2021-07-07</span><span>2021-06-08</span>',
    start: 'き',
    title: '<span>君の知らない物語</span><span>Kimi no Shiranai Monogatari</span>',
    artist: 'supercell',
    genre: 'Anime',
    link: '<span>Cutted；；</span><span><a href="https://youtu.be/nnGW3Pt45fU?t=8453" target="_blank" rel="noopener noreferrer">A cappella</a></span>'
  },
  // #132 2021-07-03
  {
    date: '2021-07-03',
    start: 'あ',
    title: '<span>あんなに一緒だったのに</span><span>Anna ni Issho Datta no ni</span>',
    artist: 'See-Saw',
    genre: 'Anime',
    link: '<a href="https://youtu.be/fLg5JxWhD68?t=2451" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-07-03',
    start: 'な',
    title: '<span>謎</span><span>Nazo</span>',
    artist: '<span>小松 未歩</span><span>Komatsu Miho</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/fLg5JxWhD68?t=5213" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #131 2021-07-01 acappellabu
  {
    date: '2021-07-01',
    start: 'こ',
    title: '<span>告白</span><span>Kokuhaku</span>',
    artist: 'supercell',
    genre: '',
    link: '<a href="https://youtu.be/UL1NQqrFcWQ?t=5529" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #130 2021-06-30
  {
    date: '2021-06-30',
    start: 'と',
    title: '<span>とても素敵な六月でした</span><span>Totemo Suteki na Rokugatsu deshita</span><span>It Was a Very Beautiful June</span>',
    artist: 'Eight',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/yKBAJa50xmE?t=7602" target="_blank" rel="noopener noreferrer">Full</a>'
  }, {
    date: '2021-06-30',
    start: 'る',
    title: '<span>ルカルカ☆ナイトフィーバー</span><span>Luka Luka ☆ Night Fever</span>',
    artist: 'samfree',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/yKBAJa50xmE?t=6340" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #129 2021-07-27 acappellabu
  {
    date: '2021-07-27',
    start: 'も',
    title: '<span>もうそうえくすぷれす</span><span>Mousou Express</span>',
    artist: '<span>千石撫子 (花澤香菜)</span><span>Sengoku Nadeko (Hanazawa Kana)</span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/5mwlGV1X15s?t=1671" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '<span>2021-07-27</span><span>2021-02-20</span>',
    start: 'な',
    title: '<span>なんでもないや</span><span>Nandemonai ya</span>',
    artist: 'RADWIMPS',
    genre: 'Anime',
    link: '<span><a href="https://youtu.be/5mwlGV1X15s?t=2907" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/92HhzKRSCvI?t=3224" target="_blank" rel="noopener noreferrer">Full</a></span>'
  }, {
    date: '2021-07-27',
    start: 'あ',
    title: '<span>アンノウン・マザーグース</span><span>Unknown Mother Goose</span>',
    artist: 'wowaka',
    genre: 'Vocaloids',
    link: '<a href="https://youtu.be/5mwlGV1X15s?t=3615" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #127 2021-06-24 acappellabu
  {
    date: '2021-06-24',
    start: 'へ',
    title: '<span>平行線</span><span>Heikousen</span>',
    artist: '<span>さユり</span><span>Sayuri</span>',
    genre: 'Anime',
    link: '<span><a href="https://youtu.be/wTZB26uvTGk?t=3734" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/ggqIE4NNWxc" target="_blank" rel="noopener noreferrer">Short MV</a></span>'
  },
  // #126 2021-06-23
  {
    date: '2021-06-23',
    start: 'こ',
    title: '<span>恋音と雨空</span><span>Koi Oto to Amezora</span>',
    artist: 'AAA',
    genre: '',
    link: '<a href="https://youtu.be/ZHqa4yqrKsM?t=6019" target="_blank" rel="noopener noreferrer">Full</a>'
  },
  // #125 2021-06-20 acappellabu
  {
    date: '2021-06-20',
    start: 'な',
    title: '<span>涙色</span><span>Namida Iro</span>',
    artist: '<span>西野カナ</span><span>Nishino Kana</span>',
    genre: '',
    link: '<a href="https://youtu.be/WJlC9lCxK3I?t=5857" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-06-20',
    start: 'ひ',
    title: 'Be Strong',
    artist: '<span>西野カナ</span><span>Nishino Kana</span>',
    genre: '',
    link: '<a href="https://youtu.be/WJlC9lCxK3I?t=6175" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #123 2021-06-17 acappellabu
  {
    date: '2021-06-17',
    start: 'わ',
    title: '<span>ワタシノテンシ</span><span>Watashi no Tenshi</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/pneuwps_7K8?t=1886" target="_blank" rel="noopener noreferrer">A cappella</a>'
  }, {
    date: '2021-06-17',
    start: 'み',
    title: '<span>ミカヅキ</span><span>Mikazuki</span>',
    artist: '<span>さユり</span><span>Sayuri<span>',
    genre: 'Anime',
    link: '<a href="https://youtu.be/pneuwps_7K8?t=6944" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #120 2021-06-11 acappellabu
  {
    date: '2021-06-11',
    start: 'せ',
    title: '<span>刹那プラス</span><span>Setsuna Plus</span>',
    artist: '<span>みきとP</span><span>mikitoP</span>',
    genre: 'Vocaloids',
    link: '<span><a href="https://youtu.be/QT051VCCbgs?t=4515" target="_blank" rel="noopener noreferrer">A cappella</a></span><span><a href="https://youtu.be/G31dut3okOc" target="_blank" rel="noopener noreferrer">MV</a></span>'
  },
  // #118 2021-06-08 acappella
  {
    date: '2021-06-08',
    start: 'は',
    title: '<span>花に赤い糸</span><span>Hana ni Akai Ito</span>',
    artist: 'HoneyWorks',
    genre: '',
    link: '<a href="https://youtu.be/nnGW3Pt45fU?t=3633" target="_blank" rel="noopener noreferrer">A cappella</a>'
  },
  // #116 2021-06-05
  {
    date: '2021-06-05',
    start: 'は',
    title: 'Butterfly',
    artist: '<span>木村カエラ</span><span>Kaela Kimura</span>',
    genre: '',
    link: '<a href="https://youtu.be/lhyRm3uen-A?t=664" target="_blank" rel="noopener noreferrer">Full</a>'
  }]
})
