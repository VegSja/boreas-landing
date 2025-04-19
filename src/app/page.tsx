import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-8">
      <div className="max-w-3xl text-center w-full">
        <h1 className="text-5xl font-extrabold mb-6">
          Ski Norway Safer
        </h1>
        <p className="text-xl text-gray-300 mb-8 font-medium leading-relaxed">
          Our upcoming app empowers backcountry skiers with smart tools for safe and fun mountain adventures in Norway.
        </p>

        <Card className="p-8 shadow-xl rounded-lg bg-white text-black">
          <CardContent className="space-y-6">
            <h2 className="text-3xl font-semibold text-black">Coming Soon</h2>
            <ul className="text-left list-disc pl-5 space-y-2 text-gray-800 text-lg">
              <li>🎯 AI-based Avalanche Forecasts</li>
              <li>📚 Safe Traversal Tips from varsom.no</li>
              <li>🌦️ Full Norway Weather from openmeteo</li>
            </ul>

            <form
              action="https://formspree.io/f/xanerqzk"
              method="POST"
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Input
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                className="py-3 px-5 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent transition-all duration-200"
              />
              <Button
                type="submit"
                className="py-3 px-6 bg-black text-white rounded-lg shadow-lg hover:bg-gray-800 transition-all duration-300"
              >
                Join Waitlist
              </Button>
            </form>

            <p className="text-xs text-gray-500 mt-4">
              Join the waitlist to get exclusive early access offers.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  )
}
