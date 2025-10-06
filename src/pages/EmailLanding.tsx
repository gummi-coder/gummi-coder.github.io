import { useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import logoImage from "@/assets/gf-training-logo.png";

const EmailLanding = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Load Kit scripts
    const loadKitScripts = () => {
      // Load Kit async script
      const kitScript = document.createElement('script');
      kitScript.async = true;
      kitScript.setAttribute('data-uid', 'c71d9827c7');
      kitScript.src = 'https://gummi.kit.com/c71d9827c7/index.js';
      document.head.appendChild(kitScript);

      // Load ConvertKit script
      const convertKitScript = document.createElement('script');
      convertKitScript.src = 'https://f.convertkit.com/ckjs/ck.5.js';
      document.head.appendChild(convertKitScript);
    };

    loadKitScripts();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Kit Form Styles */}
      <style>{`
        .formkit-form[data-uid="c71d9827c7"] *{box-sizing:border-box;}
        .formkit-form[data-uid="c71d9827c7"]{-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-input,.formkit-form[data-uid="c71d9827c7"] .formkit-select,.formkit-form[data-uid="c71d9827c7"] .formkit-checkboxes{width:100%;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-button,.formkit-form[data-uid="c71d9827c7"] .formkit-submit{border:0;border-radius:8px;color:#ffffff;cursor:pointer;display:inline-block;text-align:center;font-size:16px;font-weight:600;cursor:pointer;margin-bottom:15px;overflow:hidden;padding:0;position:relative;vertical-align:middle;transition:all 300ms ease;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-button:hover,.formkit-form[data-uid="c71d9827c7"] .formkit-submit:hover,.formkit-form[data-uid="c71d9827c7"] .formkit-button:focus,.formkit-form[data-uid="c71d9827c7"] .formkit-submit:focus{outline:none;transform:translateY(-2px);box-shadow:0 10px 25px rgba(0,0,0,0.15);}
        .formkit-form[data-uid="c71d9827c7"] .formkit-button > span,.formkit-form[data-uid="c71d9827c7"] .formkit-submit > span{display:block;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;padding:14px 24px;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-input{background:#ffffff;font-size:16px;padding:14px 16px;border:2px solid #e2e8f0;border-radius:8px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;line-height:1.5;margin:0;-webkit-transition:border-color ease-out 300ms;transition:border-color ease-out 300ms;font-family:inherit;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-input:focus{outline:none;border-color:#3b82f6;-webkit-transition:border-color ease 300ms;transition:border-color ease 300ms;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1);}
        .formkit-form[data-uid="c71d9827c7"] .formkit-input::-webkit-input-placeholder{color:#64748b;opacity:0.8;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-input::-moz-placeholder{color:#64748b;opacity:0.8;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-input:-ms-input-placeholder{color:#64748b;opacity:0.8;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-input::placeholder{color:#64748b;opacity:0.8;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-alert{background:#f8fafc;border:1px solid #e2e8f0;border-radius:8px;-webkit-flex:1 0 auto;-ms-flex:1 0 auto;flex:1 0 auto;list-style:none;margin:20px auto;padding:16px;text-align:center;width:100%;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-alert:empty{display:none;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-alert-success{background:#dcfce7;border-color:#22c55e;color:#15803d;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-alert-error{background:#fef2f2;border-color:#ef4444;color:#dc2626;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-spinner{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;height:0px;width:0px;margin:0 auto;position:absolute;top:0;left:0;right:0;width:0px;overflow:hidden;text-align:center;-webkit-transition:all 300ms ease-in-out;transition:all 300ms ease-in-out;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-spinner > div{margin:auto;width:12px;height:12px;background-color:#fff;opacity:0.3;border-radius:100%;display:inline-block;-webkit-animation:formkit-bouncedelay-formkit-form-data-uid-c71d9827c7- 1.4s infinite ease-in-out both;animation:formkit-bouncedelay-formkit-form-data-uid-c71d9827c7- 1.4s infinite ease-in-out both;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-spinner > div:nth-child(1){-webkit-animation-delay:-0.32s;animation-delay:-0.32s;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-spinner > div:nth-child(2){-webkit-animation-delay:-0.16s;animation-delay:-0.16s;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-submit[data-active] .formkit-spinner{opacity:1;height:100%;width:50px;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-submit[data-active] .formkit-spinner ~ span{opacity:0;}
        @-webkit-keyframes formkit-bouncedelay-formkit-form-data-uid-c71d9827c7-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}
        @keyframes formkit-bouncedelay-formkit-form-data-uid-c71d9827c7-{0%,80%,100%{-webkit-transform:scale(0);-ms-transform:scale(0);transform:scale(0);}40%{-webkit-transform:scale(1);-ms-transform:scale(1);transform:scale(1);}}
        .formkit-form[data-uid="c71d9827c7"]{max-width:100%;}
        .formkit-form[data-uid="c71d9827c7"] [data-style="clean"]{width:100%;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-fields{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;margin:0 auto;gap:16px;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-field,.formkit-form[data-uid="c71d9827c7"] .formkit-submit{margin:0;-webkit-flex:1 0 100%;-ms-flex:1 0 100%;flex:1 0 100%;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-powered-by-convertkit-container{margin:0;}
        .formkit-form[data-uid="c71d9827c7"] .formkit-submit{position:static;}
      `}</style>
      
      {/* Responsive Container */}
      <div className="max-w-md mx-auto px-4 py-4 sm:max-w-2xl sm:px-6 sm:py-12 lg:max-w-6xl lg:py-20">
        
        {/* Hero Section - Responsive */}
        <div className="text-center mb-6 lg:mb-16">
          
          <div className="mb-4 sm:mb-6 lg:mb-8">
            <img 
              src={logoImage} 
              alt="GF Training Logo" 
              className="w-20 h-20 mx-auto object-contain sm:w-32 sm:h-32 lg:w-40 lg:h-40"
            />
          </div>
          <h1 className="text-2xl font-bold text-foreground mb-4 leading-tight sm:text-3xl lg:text-4xl lg:mb-6">
            <span className="block sm:inline">Vertu sterkari, grennri</span>
            <span className="bg-gradient-primary bg-clip-text text-transparent block sm:inline sm:ml-2">og stöðugri</span>
            <span className="block sm:block">– á aðeins 30 dögum</span>
            <span className="bg-gradient-secondary bg-clip-text text-transparent block">(án giska og kúr-vitleysu)</span>
          </h1>
          
          <p className="text-sm text-muted-foreground mb-4 leading-relaxed sm:text-lg lg:text-xl lg:max-w-4xl lg:mx-auto lg:mb-8">
            ÓKEYPIS 30 daga æfinga- og næringarsería í tölvupósti<br className="sm:hidden"/>
            <span className="hidden sm:inline"> - </span>
            Einföld dagleg skref sem virka í alvöru. Engin vitleysa — bara plan, stuðningur og mælanlegur árangur.
          </p>
        </div>

        {/* Email Form - Above the Fold */}
        <Card className="mb-6 shadow-elegant border border-border/50 lg:mb-12">
          <CardContent className="p-4 sm:p-8 lg:p-10">
            <form 
              action="https://app.kit.com/forms/8632963/subscriptions" 
              className="seva-form formkit-form" 
              method="post" 
              data-sv-form="8632963" 
              data-uid="c71d9827c7" 
              data-format="inline" 
              data-version="5" 
              data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
              min-width="400 500 600 700 800"
            >
              <div data-style="clean">
                <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
                  <div className="formkit-field">
                    <input 
                      className="formkit-input" 
                      name="first_name" 
                      aria-label="Nafn" 
                      placeholder="Nafn" 
                      required 
                      type="text" 
                      style={{
                        color: 'rgb(0, 0, 0)', 
                        borderColor: 'rgb(227, 227, 227)', 
                        borderRadius: '4px', 
                        fontWeight: '400',
                        width: '100%',
                        height: '48px',
                        padding: '12px',
                        fontSize: '16px',
                        border: '1px solid rgb(227, 227, 227)',
                        marginBottom: '15px'
                      }}
                    />
                  </div>
                  <div className="formkit-field">
                    <input 
                      className="formkit-input" 
                      name="email_address" 
                      aria-label="Email" 
                      placeholder="Netfang" 
                      required 
                      type="email" 
                      style={{
                        color: 'rgb(0, 0, 0)', 
                        borderColor: 'rgb(227, 227, 227)', 
                        borderRadius: '4px', 
                        fontWeight: '400',
                        width: '100%',
                        height: '48px',
                        padding: '12px',
                        fontSize: '16px',
                        border: '1px solid rgb(227, 227, 227)',
                        marginBottom: '15px'
                      }}
                    />
                  </div>
                  <button 
                    data-element="submit" 
                    className="formkit-submit formkit-submit" 
                    style={{
                      color: 'rgb(255, 255, 255)', 
                      backgroundColor: 'rgb(22, 119, 190)', 
                      borderRadius: '4px', 
                      fontWeight: '400',
                      width: '100%',
                      height: '48px',
                      fontSize: '16px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span>Ég er til! byrjum núna.</span>
                  </button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* What You'll Get - Responsive */}
        <div className="mb-8 lg:mb-16">
          <h3 className="text-xl font-bold text-foreground mb-6 text-center sm:text-2xl lg:text-3xl lg:mb-10">
            Þetta færð þú:
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:w-6 sm:h-6">
                <span className="text-white text-xs font-bold sm:text-sm">✓</span>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">Skref-fyrir-skref 30 daga plan (stutt skilaboð + "verkefni dagsins")</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:w-6 sm:h-6">
                <span className="text-white text-xs font-bold sm:text-sm">✓</span>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">Æfingar eftir þínu stigi (byrjandi → lengra kominn)</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:w-6 sm:h-6">
                <span className="text-white text-xs font-bold sm:text-sm">✓</span>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">Næring án öfga: prótein, kolvetni, fita — einfaldar formúlur</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:w-6 sm:h-6">
                <span className="text-white text-xs font-bold sm:text-sm">✓</span>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">Tækni & endurheimt: upphitun, cooldown, hvíld, svefn</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:w-6 sm:h-6">
                <span className="text-white text-xs font-bold sm:text-sm">✓</span>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">Mælingar & framvinda: hvernig þú fylgist með raunverulegum árangri</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 sm:w-6 sm:h-6">
                <span className="text-white text-xs font-bold sm:text-sm">✓</span>
              </div>
              <p className="text-muted-foreground text-sm sm:text-base">Hugarfar & vanar: aðferðir sem halda þér við efnið</p>
            </div>
          </div>
          <p className="text-center text-muted-foreground mt-6 font-medium text-base sm:text-lg lg:text-xl lg:mt-10">
            👉 Allt sent beint í pósthólfið þitt. Ókeypis.
          </p>
        </div>

        {/* Authority Section - Responsive */}
        <Card className="mb-8 shadow-elegant border border-border/50 lg:mb-12">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <div className="text-center lg:max-w-4xl lg:mx-auto">
              <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center sm:w-20 sm:h-20 lg:w-24 lg:h-24 lg:mb-6">
                <span className="text-white text-2xl font-bold sm:text-3xl lg:text-4xl">G</span>
              </div>
              <blockquote className="text-sm text-muted-foreground italic mb-4 leading-relaxed sm:text-base lg:text-lg lg:mb-6">
                "Ég hjálpa fólki að hætta að giska og ná loksins árangri. Engir skyndikúrar, engin töfralausn — bara skýrt kerfi sem þú getur fylgt. Þessi 30 daga sería eru sömu verkfæri og ég nota með viðskiptavinum mínum til að sjá raunverulegar breytingar á nokkrum vikum."
              </blockquote>
              <div className="text-foreground">
                <p className="font-bold text-lg sm:text-xl lg:text-2xl">Gudmundur Fridgeirsson</p>
                <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">GF Training Coach</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Proof Section - Responsive */}
        <div className="mb-8 lg:mb-12">
          <Card className="shadow-elegant border border-border/50">
            <CardContent className="p-6 sm:p-8 lg:p-10">
              <div className="text-center mb-4 lg:max-w-4xl lg:mx-auto">
                <h4 className="text-lg font-bold text-foreground mb-4 sm:text-xl lg:text-2xl lg:mb-6">Meðmæli:</h4>
                <div className="bg-muted/30 rounded-lg p-4 mb-4 sm:p-6 lg:p-8">
                  <div className="bg-background rounded-lg p-4 shadow-sm border border-border/50 sm:p-6 lg:p-8">
                    <p className="text-muted-foreground italic mb-2 text-sm sm:text-base lg:text-lg leading-relaxed">
                      "Ég var búin að prófa mjög mikið til þess að koma mér af stað því mér fannst ræktin svo leiðinleg EN það breyttist algerlega þegar ég byrjaði í þjálfun hjá GFtraining. Kom mér af stað og er loksins að ná að halda mig við ræktina"
                    </p>
                    <p className="text-xs text-primary font-medium sm:text-sm lg:text-base">- Viðskiptavinur GF Training</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Final Reassurance - Responsive */}
        <div className="text-center mb-8 lg:mb-12">
          <p className="text-muted-foreground text-sm mb-2 font-medium sm:text-base lg:text-lg">100% ókeypis — hættir hvenær sem er</p>
          <p className="text-muted-foreground text-sm sm:text-base lg:text-lg">Enginn ruslpóstur — bara aðferðir sem virka raunverulega</p>
        </div>

        {/* Bottom CTA - Responsive */}
        <Card className="shadow-elegant border border-border/50">
          <CardContent className="p-6 sm:p-8 lg:p-10">
            <form 
              action="https://app.kit.com/forms/8632963/subscriptions" 
              className="seva-form formkit-form" 
              method="post" 
              data-sv-form="8632963" 
              data-uid="c71d9827c7" 
              data-format="inline" 
              data-version="5" 
              data-options='{"settings":{"after_subscribe":{"action":"message","success_message":"Success! Now check your email to confirm your subscription.","redirect_url":""},"analytics":{"google":null,"fathom":null,"facebook":null,"segment":null,"pinterest":null,"sparkloop":null,"googletagmanager":null},"modal":{"trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"powered_by":{"show":false,"url":"https://kit.com/features/forms?utm_campaign=poweredby&utm_content=form&utm_medium=referral&utm_source=dynamic"},"recaptcha":{"enabled":false},"return_visitor":{"action":"show","custom_content":""},"slide_in":{"display_in":"bottom_right","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15},"sticky_bar":{"display_in":"top","trigger":"timer","scroll_percentage":null,"timer":5,"devices":"all","show_once_every":15}},"version":"5"}'
              min-width="400 500 600 700 800"
            >
              <div data-style="clean">
                <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
                <div data-element="fields" data-stacked="false" className="seva-fields formkit-fields">
                  <div className="formkit-field">
                    <input 
                      className="formkit-input" 
                      name="first_name" 
                      aria-label="Nafn" 
                      placeholder="Nafn" 
                      required 
                      type="text" 
                      style={{
                        color: 'rgb(0, 0, 0)', 
                        borderColor: 'rgb(227, 227, 227)', 
                        borderRadius: '4px', 
                        fontWeight: '400',
                        width: '100%',
                        height: '48px',
                        padding: '12px',
                        fontSize: '16px',
                        border: '1px solid rgb(227, 227, 227)',
                        marginBottom: '15px'
                      }}
                    />
                  </div>
                  <div className="formkit-field">
                    <input 
                      className="formkit-input" 
                      name="email_address" 
                      aria-label="Email" 
                      placeholder="Netfang" 
                      required 
                      type="email" 
                      style={{
                        color: 'rgb(0, 0, 0)', 
                        borderColor: 'rgb(227, 227, 227)', 
                        borderRadius: '4px', 
                        fontWeight: '400',
                        width: '100%',
                        height: '48px',
                        padding: '12px',
                        fontSize: '16px',
                        border: '1px solid rgb(227, 227, 227)',
                        marginBottom: '15px'
                      }}
                    />
                  </div>
                  <button 
                    data-element="submit" 
                    className="formkit-submit formkit-submit" 
                    style={{
                      color: 'rgb(255, 255, 255)', 
                      backgroundColor: 'rgb(22, 119, 190)', 
                      borderRadius: '4px', 
                      fontWeight: '400',
                      width: '100%',
                      height: '48px',
                      fontSize: '16px',
                      border: 'none',
                      cursor: 'pointer'
                    }}
                  >
                    <div className="formkit-spinner">
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                    <span>Ég er til! byrjum núna.</span>
                  </button>
                </div>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Footer */}
        <div className="text-center mt-8 text-xs text-gray-500">
          <p>GF Training • gftraining.is</p>
        </div>
      </div>
    </div>
  );
};

export default EmailLanding;
