import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Cookie, Mail, Phone, MapPin } from "lucide-react"
import Link from "next/link"

export default function Component() {
    return (
        <div className="min-h-screen bg-background">
            {/* Main Content */}
            <main className="container mx-auto px-4 py-8 max-w-4xl">
                <div className="space-y-8">
                    {/* Introduction */}


                    <div className="py-10 flex flex-col gap-3">
                        <div className=" text-3xl font-semibold flex items-center justify-center gap-2">
                            Cookie Policy
                        </div>
                        <div className="text-xl flex items-center text-gray-600 justify-center gap-2">
                            Last updated:{" "}
                            {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
                        </div>

                        <div className="space-y-4">
                            <p className="text-muted-foreground">
                                This Cookie Policy explains how CoderCrafter ("we", "us", or "our") uses cookies and similar
                                technologies when you visit our website. It explains what these technologies are and why we use them, as
                                well as your rights to control our use of them.
                            </p>
                        </div>
                    </div>


                    {/* What are cookies */}
                    <Card>
                        <CardHeader>
                            <CardTitle>What are cookies?</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                Cookies are small data files that are placed on your computer or mobile device when you visit a website.
                                Cookies are widely used by website owners to make their websites work, or to work more efficiently, as
                                well as to provide reporting information.
                            </p>
                            <p className="text-muted-foreground">
                                Cookies set by the website owner (in this case, CoderCrafter) are called "first-party cookies." Cookies
                                set by parties other than the website owner are called "third-party cookies." Third-party cookies enable
                                third-party features or functionality to be provided on or through the website.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Types of cookies */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Types of cookies we use</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="grid gap-6 md:grid-cols-2">
                                <div className="space-y-3">
                                    <h3 className="font-semibold text-primary">Essential Cookies</h3>
                                    <p className="text-sm text-muted-foreground">
                                        These cookies are strictly necessary to provide you with services available through our website and
                                        to use some of its features.
                                    </p>
                                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                        <li>• Authentication cookies</li>
                                        <li>• Security cookies</li>
                                        <li>• Load balancing cookies</li>
                                    </ul>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="font-semibold text-primary">Performance Cookies</h3>
                                    <p className="text-sm text-muted-foreground">
                                        These cookies allow us to count visits and traffic sources so we can measure and improve the
                                        performance of our site.
                                    </p>
                                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                        <li>• Google Analytics</li>
                                        <li>• Page load time tracking</li>
                                        <li>• Error reporting</li>
                                    </ul>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="font-semibold text-primary">Functional Cookies</h3>
                                    <p className="text-sm text-muted-foreground">
                                        These cookies enable the website to provide enhanced functionality and personalization.
                                    </p>
                                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                        <li>• Language preferences</li>
                                        <li>• Theme settings</li>
                                        <li>• User preferences</li>
                                    </ul>
                                </div>

                                <div className="space-y-3">
                                    <h3 className="font-semibold text-primary">Targeting Cookies</h3>
                                    <p className="text-sm text-muted-foreground">
                                        These cookies may be set through our site by our advertising partners to build a profile of your
                                        interests.
                                    </p>
                                    <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                                        <li>• Social media cookies</li>
                                        <li>• Advertising cookies</li>
                                        <li>• Remarketing pixels</li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* How we use cookies */}
                    <Card>
                        <CardHeader>
                            <CardTitle>How we use cookies</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">We use cookies for several reasons:</p>
                            <ul className="space-y-2 text-muted-foreground ml-4">
                                <li>
                                    • <strong>To provide essential website functionality</strong> - Some cookies are essential for our
                                    website to function properly
                                </li>
                                <li>
                                    • <strong>To improve website performance</strong> - We analyze how visitors use our website to
                                    identify areas for improvement
                                </li>
                                <li>
                                    • <strong>To personalize your experience</strong> - We remember your preferences to provide a more
                                    tailored experience
                                </li>
                                <li>
                                    • <strong>To provide relevant content</strong> - We may show you content that is more relevant to your
                                    interests
                                </li>
                                <li>
                                    • <strong>To measure advertising effectiveness</strong> - We track the performance of our marketing
                                    campaigns
                                </li>
                            </ul>
                        </CardContent>
                    </Card>

                    {/* Your choices */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Your choices regarding cookies</CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <p className="text-muted-foreground">
                                You have several options to control or limit how we and our partners use cookies:
                            </p>

                            <div className="space-y-4">
                                <div>
                                    <h4 className="font-semibold mb-2">Browser Settings</h4>
                                    <p className="text-sm text-muted-foreground">
                                        Most web browsers allow you to control cookies through their settings preferences. You can set your
                                        browser to:
                                    </p>
                                    <ul className="text-sm text-muted-foreground space-y-1 ml-4 mt-2">
                                        <li>• Delete all cookies</li>
                                        <li>• Block all cookies</li>
                                        <li>• Allow all cookies</li>
                                        <li>• Block third-party cookies</li>
                                        <li>• Clear all cookies when you close the browser</li>
                                    </ul>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-2">Cookie Consent Manager</h4>
                                    <p className="text-sm text-muted-foreground mb-3">
                                        You can manage your cookie preferences using our cookie consent tool:
                                    </p>
                                    <Button variant="outline" className="w-full sm:w-auto bg-transparent">
                                        Manage Cookie Preferences
                                    </Button>
                                </div>

                                <div>
                                    <h4 className="font-semibold mb-2">Opt-out Links</h4>
                                    <p className="text-sm text-muted-foreground">
                                        You can opt out of certain third-party cookies by visiting:
                                    </p>
                                    <ul className="text-sm space-y-1 ml-4 mt-2">
                                        <li>
                                            •{" "}
                                            <Link href="https://tools.google.com/dlpage/gaoptout" className="text-primary hover:underline">
                                                Google Analytics Opt-out
                                            </Link>
                                        </li>
                                        <li>
                                            •{" "}
                                            <Link href="https://www.aboutads.info/choices/" className="text-primary hover:underline">
                                                Digital Advertising Alliance
                                            </Link>
                                        </li>
                                        <li>
                                            •{" "}
                                            <Link href="https://www.youronlinechoices.com/" className="text-primary hover:underline">
                                                Your Online Choices
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Updates to policy */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Updates to this Cookie Policy</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                We may update this Cookie Policy from time to time to reflect changes in our practices or for other
                                operational, legal, or regulatory reasons. We will notify you of any material changes by posting the
                                updated policy on our website and updating the "Last updated" date at the top of this policy.
                            </p>
                        </CardContent>
                    </Card>

                    {/* Contact information */}
                    <Card>
                        <CardHeader>
                            <CardTitle>Contact Us</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground mb-4">
                                If you have any questions about this Cookie Policy or our use of cookies, please contact us:
                            </p>

                            <div className="grid gap-4 md:grid-cols-3">
                                <div className="flex items-center gap-3">
                                    <Mail className="h-5 w-5 text-primary" />
                                    <div>
                                        <p className="font-medium">Email</p>
                                        <p className="text-sm text-muted-foreground">privacy@codercrafter.com</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <Phone className="h-5 w-5 text-primary" />
                                    <div>
                                        <p className="font-medium">Phone</p>
                                        <p className="text-sm text-muted-foreground">+1 (555) 123-4567</p>
                                    </div>
                                </div>

                                <div className="flex items-center gap-3">
                                    <MapPin className="h-5 w-5 text-primary" />
                                    <div>
                                        <p className="font-medium">Address</p>
                                        <p className="text-sm text-muted-foreground">123 Tech Street, San Francisco, CA 94105</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    )
}
