import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    kennitala: "",
    fitnessLevel: "",
    goals: "",
    plan: "",
    agreeToTerms: false
  });
  const { toast } = useToast();

  // FormSubmit handles the submission automatically
  // No need for custom handleSubmit function

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }));
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
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
                Byrjaðu með GF Training
              </h1>
              <p className="text-xl text-muted-foreground">
                Fylltu út formið hér að neðan og við hjálpum þér að velja fullkomna æfingaáætlun og byrja á lífleið þinni
              </p>
            </div>

            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="text-2xl text-center">Byrjaðu í dag!</CardTitle>
                <CardDescription className="text-center">
                  Hjálpaðu okkur að skilja markmið þín og búa til sérsniðna áætlun fyrir þig
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form action="https://formsubmit.co/gummi@gftraining.is" method="POST" className="space-y-6">
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Persónulegar upplýsingar</h3>
                    
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Fullt nafn *</Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          placeholder="Sláðu inn fullt nafn"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Netfang *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="Sláðu inn netfang"
                          value={formData.email}
                          onChange={(e) => handleInputChange("email", e.target.value)}
                          className="h-12"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Símanúmer</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          placeholder="Sláðu inn símanúmer"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          className="h-12"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="kennitala">Kennitala *</Label>
                        <Input
                          id="kennitala"
                          name="kennitala"
                          type="text"
                          placeholder="Sláðu inn kennitölu"
                          value={formData.kennitala}
                          onChange={(e) => handleInputChange("kennitala", e.target.value)}
                          className="h-12"
                          maxLength={11}
                          required
                        />
                      </div>
                    </div>
                  </div>

                  {/* Fitness Information */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Upplýsingar um þig</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="fitnessLevel">Núverandi getustig *</Label>
                      <Select onValueChange={(value) => handleInputChange("fitnessLevel", value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Veldu núverandi getustig" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Byrjandi - Nýr í líkamsrækt</SelectItem>
                          <SelectItem value="intermediate">Miðstig - Einhver reynsla</SelectItem>
                          <SelectItem value="advanced">Íþróttamaður - Mjög reynsluríkur</SelectItem>
                          <SelectItem value="athlete">Atvinnumaður - Atvinnustig</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="fitnessLevel" value={formData.fitnessLevel} />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="goals">Aðal markmið þitt? *</Label>
                      <Textarea
                        id="goals"
                        name="goals"
                        placeholder="Lýsdu aðal markmiðum þínum (t.d. þyngdartap, vöðvaaukning, styrkur, þol, o.s.frv.)"
                        value={formData.goals}
                        onChange={(e) => handleInputChange("goals", e.target.value)}
                        className="min-h-[100px]"
                        required
                      />
                    </div>
                  </div>

                  {/* Plan Selection */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-foreground border-b border-border pb-2">Val á áætlun</h3>
                    
                    <div className="space-y-2">
                      <Label htmlFor="plan">Valin æfingaáætlun *</Label>
                      <Select onValueChange={(value) => handleInputChange("plan", value)}>
                        <SelectTrigger className="h-12">
                          <SelectValue placeholder="Veldu æfingaáætlun" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="monthly">Mánaðarlegt - 19.995kr/á mánuði</SelectItem>
                          <SelectItem value="3-month">3-Mánuðir - 14.995kr/á mánuði (Sparaðu 15.000kr)</SelectItem>
                          <SelectItem value="6-month">6-Mánuðir - 9.995kr/á mánuði (Sparaðu 59.995kr)</SelectItem>
                        </SelectContent>
                      </Select>
                      <input type="hidden" name="plan" value={formData.plan} />
                    </div>
                  </div>

                  {/* Terms and Conditions */}
                  <div className="flex items-center space-x-2">
                    <Checkbox 
                      id="terms" 
                      checked={formData.agreeToTerms}
                      onCheckedChange={(checked) => handleInputChange("agreeToTerms", checked as boolean)}
                    />
                    <input type="hidden" name="agreeToTerms" value={formData.agreeToTerms ? "yes" : "no"} />
                    <Label htmlFor="terms" className="text-sm">
                      Ég samþyggi skilmála og persónuverndarstefnu *
                    </Label>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full h-12 text-lg"
                    variant="hero"
                  >
                    Byrjaðu í dag!
                  </Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-8 text-center">
              <p className="text-muted-foreground">
                Spurningar? Hafðu samband við mig á{" "}
                <a 
                  href="mailto:gummi@gftraining.com" 
                  className="text-primary hover:underline"
                >
                  gummi@gftraining.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Contact;