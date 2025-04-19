import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-blue-200 p-6">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold mb-4">Ski Norway Safer</h1>
        <p className="text-lg text-gray-700 mb-6">
          Our upcoming app empowers backcountry skiers with smart tools for safe and fun mountain adventures in Norway.
        </p>

        <Card className="p-6 shadow-xl">
          <CardContent className="space-y-4">
            <h2 className="text-2xl font-semibold">Coming Soon</h2>
            <ul className="text-left list-disc pl-5 text-gray-700">
              <li>🎯 AI-based Avalanche Forecasts</li>
              <li>📚 Safe Traversal Tips from varsom.no</li>
              <li>🌦️ Full Norway Weather from openmeteo</li>
            </ul>

            <form
              action="https://formspree.io/f/YOUR_FORM_ID"
              method="POST"
              className="flex flex-col sm:flex-row gap-2"
            >
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
              />
              <Button type="submit">Join Waitlist</Button>
            </form>

            <p className="text-xs text-gray-500">
              Join the waitlist to get exclusive early access offers.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
