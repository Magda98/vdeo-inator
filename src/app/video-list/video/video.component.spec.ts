import { NumberFormatPipe } from './../../pipes/number-format.pipe';
import { render, screen } from '@testing-library/angular'
import { VideoComponent } from './video.component';

describe('VideoComponent', () => {
  test('should render title', async () => {
    await render(VideoComponent, {
      declarations: [NumberFormatPipe],
      componentProperties: {
        video: {
          kind: "youtube#video",
          etag: "dlMgiFjQGpvB_JMms1vd0OeJHMU",
          id: "2onLeKNEfoA",
          snippet: {
            publishedAt: "2022-10-25T13:00:02Z",
            channelId: "UCTIyVgnTO9gGZBFq6GRJvUQ",
            title: "Jakub Grabowski - Chrapka (Club Banger) ft. Patryk MTS [SB Starter ⭐️]",
            description: "Drugi singiel Jakuba Grabowskiego w SB Starter ⭐ Artysta z Ciechanowa konsekwentnie rozwija swój warsztat, a do współpracy zaprosił gdańskiego ulicznego rapera, Patryka MTS.\n \n“Chrapka (Club Banger)\" otwiera kolejny etap akcji SB Starter. W listopadzie czekają nas premiery kolejnych uczestników akcji.\n\nJakub Grabowski na IG ➡ https://bit.ly/3D84GOB\nSBM Starter na IG ➡ https://bit.ly/3QCnaKZ\nSBM Starter na FB ➡ https://bit.ly/3AIoHd3\n\nReżyser: Filip Skrońc \nOperator: Iwo Rachwał \n1st AD: Jonasz Chlebowski \nŚwiatło: Artur Prymon\nScenariusz: Piotrek Szumowski, Wiolka Walaszczyk, Bartek Strusiński\nProd: Jan Drewicz, Marta Lenartowicz\nKierownik produkcji: Aleksandra Dąbrowska   \nCharakteryzacja: Karolina Han\nKostiumy: Kornelia Fabiańska\nScenografia: Katarzyna Jańczuk\nMontaż: Filip Skrońc // Rafał Felak SHINY HEAD\nAnimacje: Rafał Felak SHINY HEAD\nFotosy: Mikołaj Wawrzak\n\nPodziękowania: Club Bosco Ciechanów, Temptation Tancerze Nitkowskiej, Studio Antyk\n\nTitle: Chrapka (Club Banger)\nArtist: Jakub Grabowski, Patryk MTS\nMusic: Bryan dla NOBOCOTO studio\nMix/mastering: DJ Johny dla NOBOCOTO studio\nISRC: PLS282200165\n©℗ 2022 SBM Label",
            thumbnails: {
              default: {
                url: "https://i.ytimg.com/vi/2onLeKNEfoA/default.jpg",
                width: 120,
                height: 90
              },
              standard: {
                url: "https://i.ytimg.com/vi/2onLeKNEfoA/default.jpg",
                width: 120,
                height: 90
              },
              high: {
                url: "https://i.ytimg.com/vi/2onLeKNEfoA/default.jpg",
                width: 120,
                height: 90
              },
              medium: {
                url: "https://i.ytimg.com/vi/2onLeKNEfoA/default.jpg",
                width: 120,
                height: 90
              }
            },
            channelTitle: "SBM Label",
            tags: [
              "sb",
              "maffija",
              "sbmaffija",
              "sbm"
            ],
            categoryId: "10",
            liveBroadcastContent: "none",
            defaultLanguage: "pl",
            localized: {
              title: "Jakub Grabowski - Chrapka (Club Banger) ft. Patryk MTS [SB Starter ⭐️]",
              description: "Drugi singiel Jakuba Grabowskiego w SB Starter ⭐ Artysta z Ciechanowa konsekwentnie rozwija swój warsztat, a do współpracy zaprosił gdańskiego ulicznego rapera, Patryka MTS.\n \n“Chrapka (Club Banger)\" otwiera kolejny etap akcji SB Starter. W listopadzie czekają nas premiery kolejnych uczestników akcji.\n\nJakub Grabowski na IG ➡ https://bit.ly/3D84GOB\nSBM Starter na IG ➡ https://bit.ly/3QCnaKZ\nSBM Starter na FB ➡ https://bit.ly/3AIoHd3\n\nReżyser: Filip Skrońc \nOperator: Iwo Rachwał \n1st AD: Jonasz Chlebowski \nŚwiatło: Artur Prymon\nScenariusz: Piotrek Szumowski, Wiolka Walaszczyk, Bartek Strusiński\nProd: Jan Drewicz, Marta Lenartowicz\nKierownik produkcji: Aleksandra Dąbrowska   \nCharakteryzacja: Karolina Han\nKostiumy: Kornelia Fabiańska\nScenografia: Katarzyna Jańczuk\nMontaż: Filip Skrońc // Rafał Felak SHINY HEAD\nAnimacje: Rafał Felak SHINY HEAD\nFotosy: Mikołaj Wawrzak\n\nPodziękowania: Club Bosco Ciechanów, Temptation Tancerze Nitkowskiej, Studio Antyk\n\nTitle: Chrapka (Club Banger)\nArtist: Jakub Grabowski, Patryk MTS\nMusic: Bryan dla NOBOCOTO studio\nMix/mastering: DJ Johny dla NOBOCOTO studio\nISRC: PLS282200165\n©℗ 2022 SBM Label"
            },
            defaultAudioLanguage: "pl"
          },
          status: {
            uploadStatus: "processed",
            privacyStatus: "public",
            license: "youtube",
            embeddable: true,
            publicStatsViewable: false,
            madeForKids: false
          },
          statistics: {
            viewCount: "684101",
            likeCount: "42580",
            favoriteCount: "0",
            commentCount: "1468"
          },
          player: {
            embedHtml: "<iframe width=\"480\" height=\"360\" src=\"//www.youtube.com/embed/2onLeKNEfoA\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>"
          },
          topicDetails: {
            topicCategories: [
              "https://en.wikipedia.org/wiki/Electronic_music",
              "https://en.wikipedia.org/wiki/Hip_hop_music",
              "https://en.wikipedia.org/wiki/Music",
              "https://en.wikipedia.org/wiki/Pop_music"
            ]
          }
        }
      },
    })

    expect(screen.getByText('Jakub Grabowski - Chrapka (Club Banger) ft. Patryk MTS [SB Starter ⭐️]'))
  })
})
