import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Terms = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Back Button */}
            <div className="mb-6">
              <Link to="/">
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Til baka á forsíðu
                </Button>
              </Link>
            </div>
            
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-foreground mb-4">
                Skilmálar og persónuverndarstefna
              </h1>
              <p className="text-xl text-muted-foreground">
                GF Training - Löglegar upplýsingar og skilmálar
              </p>
            </div>

            <div className="space-y-8">
              {/* Skilmálar */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Skilmálar</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-muted-foreground">
                  <p className="mb-6">
                    Með því að skrá þig í þjónustu GF Training samþykkir þú eftirfarandi skilmála. GF Training býður upp á fjarþjálfun, næringarráðgjöf, matarplön og markmiðasetningu í gegnum appið GF Training sem er hostað af Kahunas. Öll samskipti fara fram í gegnum appið, tölvupóst eða SMS. Greiðsla fer fram með reikningi í heimabanka.
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">1. Þjónusta</h3>
                    <p>
                      GF Training veitir fjarþjálfun í gegnum app með aðgangi að æfingamyndböndum, matarplönum, næringarráðgjöf og markmiðasetningu. Viðskiptavinur getur valið um mánaðaráskrift, 3 mánaða eða 6 mánaða pakka.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">2. Greiðslur og endurgreiðslur</h3>
                    <p>
                      Greiðslur fara fram með reikningi í heimabanka. Allar greiðslur eru bindandi fyrir þann tímabilspakka sem valinn er og eru ekki endurgreiddar eftir að þjónustan hefur hafist.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">3. Ábyrgð og afsal ábyrgðar</h3>
                    <p>
                      Með því að samþykkja þessa skilmála staðfestir viðskiptavinur að hann taki þátt í þjálfun og fylgi matar- og æfingaáætlunum GF Training að eigin frumkvæði og ábyrgð. GF Training og Guðmundur Friðgeirsson bera enga ábyrgð á meiðslum, vanlíðan, heilsutjóni eða öðrum afleiðingum sem kunna að koma upp við framkvæmd áætlana eða notkun efnis sem veitt er í gegnum appið, tölvupóst eða aðra miðla.
                    </p>
                    <p className="mt-3">
                      GF Training veitir ekki læknisfræðilega ráðgjöf og hvetur alla notendur til að ráðfæra sig við lækni áður en þeir hefja æfinga- eða matarplan.
                    </p>
                    <p className="mt-3">
                      Með því að haka við „Ég samþykki skilmála og persónuverndarstefnu" lýsir viðskiptavinur því yfir að hann afsali GF Training og Guðmundi Friðgeirssyni allri ábyrgð vegna ofangreinds og samþykki að bera ábyrgð á eigin ákvörðunum.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">4. Breytingar á þjónustu</h3>
                    <p>
                      GF Training áskilur sér rétt til að breyta eða þróa þjónustuna án fyrirvara.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">5. Notkunarreglur</h3>
                    <p>
                      Notendur skulu ekki deila efni þjónustunnar með öðrum. Misnotkun getur leitt til tafarlausrar lokunar á þjónustu án endurgreiðslu.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Persónuverndarstefna */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-2xl">Persónuverndarstefna</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 text-muted-foreground">
                  <p className="mb-6">
                    GF Training, í rekstri Guðmundar Friðgeirssonar, virðir réttindi notenda og vinnur að því að tryggja öryggi og trúnað persónuupplýsinga í samræmi við persónuverndarlög (GDPR). Hér er lýst hvaða gögn eru safnað, hvernig þau eru notuð og hvernig þeim er gætt.
                  </p>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">1. Hvaða gögn eru tekin?</h3>
                    <p>
                      GF Training safnar eftirfarandi gögnum eftir þörfum þjónustunnar: nafn, netfang, símanúmer, líkamsupplýsingar (ef notað), markmið, æfingaupplýsingar og næringartengd gögn.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">2. Hvernig eru gögnin notuð?</h3>
                    <p>
                      Gögn eru notuð til að veita sérsniðna fjarþjálfun, útbúa matarplön og hafa samband vegna þjónustu. Ekki er safnað gögnum í markaðstilgangi nema með sérstöku samþykki.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">3. Geymsla gagna og þjónustuaðilar</h3>
                    <p>
                      Gögn eru geymd í öruggu appi (Kahunas) og í sumum tilvikum í Google Docs. Aðgangur að gögnum er takmarkaður við Guðmund Friðgeirsson og þá þjónustuaðila sem nauðsynlega þurfa að vinna með gögnin.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">4. Nafnlaus gögn og greiningartól</h3>
                    <p>
                      Í sumum tilvikum gæti GF Training nýtt nafnlausar, dulkóðaðar upplýsingar í þjónustuþróun eða greiningu með gervigreind (AI). Aldrei er hægt að rekja gögnin til einstaklinga.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">5. Réttindi notenda</h3>
                    <p>
                      Notendur eiga rétt á aðgangi að eigin gögnum, leiðréttingu, eyðingu og að afturkalla samþykki sitt. Einnig er hægt að leggja fram kvörtun til Persónuverndarstofu.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">6. Geymslutími</h3>
                    <p>
                      Gögn eru geymd í allt að 2 ár frá lok þjónustu nema annað sé krafist samkvæmt lögum.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">7. Samþykki</h3>
                    <p>
                      Með því að haka við „Ég samþykki skilmála og persónuverndarstefnu" samþykkir notandi þessa stefnu.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">8. Hafa samband</h3>
                    <p>
                      Ef þú hefur spurningar um persónuverndarstefnuna, hafðu samband við okkur á{" "}
                      <a 
                        href="mailto:gummi@gftraining.is" 
                        className="text-primary hover:underline"
                      >
                        gummi@gftraining.is
                      </a>
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Síðustu uppfærslur */}
              <Card className="shadow-elegant">
                <CardHeader>
                  <CardTitle className="text-xl">Síðustu uppfærslur</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    <strong>Skilmálar:</strong> Síðast uppfært 23. júlí 2025<br />
                    <strong>Persónuverndarstefna:</strong> Síðast uppfært 23. júlí 2025
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Terms; 