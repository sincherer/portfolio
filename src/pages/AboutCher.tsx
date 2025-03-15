import React from 'react';

const AboutCher = () => {
  return (
    <div className="min-h-screen py-12 px-6 sm:px-12">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-12">
        <h1 className="text-xl font-bold text-gray-900 mb-6">A Little About Me</h1>
        <p className="text-lg text-gray-700">
          Welcome to my little corner of the internet! Let me tell you about myself—don’t worry, it’s not boring (I promise).
        </p>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl mx-auto space-y-8">
        {/* My Pets */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">My Guppy Fishes Are My Roommates</h2>
          <p className="text-gray-700">
            First things first: I’m a proud pet parent—to guppies! These little swimmers are like tiny underwater acrobats.
            They’re low-maintenance but surprisingly entertaining. Watching them zip around their tank is oddly therapeutic.
            Plus, they’re way less demanding than a dog or cat. No walks, no litter boxes—just good vibes and bubbles.
          </p>
        </section>

        {/* Mini Green Plants */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Mini Green Plants: My Tiny Forest</h2>
          <p className="text-gray-700">
            My room is basically a mini jungle (okay, maybe more like a windowsill garden). I love having small green plants
            around—they make everything feel fresh and alive. It’s like having tiny oxygen-producing roommates who never talk back.
            Bonus: they’re great listeners when I’m brainstorming ideas or just need to vent about life.
          </p>
        </section>

        {/* DIY Enthusiast */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">DIY Queen (Or King?)</h2>
          <p className="text-gray-700">
            If there’s one thing I love, it’s making stuff with my own two hands. I’m a full-on DIY enthusiast—you name it,
            I’ve probably tried it:
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mt-4">
            <li>
              <strong>Woolfelt Dolls:</strong> Turning fluffy wool into adorable dolls is oddly satisfying. It’s like magic, but
              messier.
            </li>
            <li>
              <strong>Painting:</strong> I’m no Picasso, but I enjoy splashing colors on canvas. Abstract art? That’s just a
              fancy way of saying “Oops, that blob wasn’t supposed to be there.”
            </li>
            <li>
              <strong>Candles with Fragrance:</strong> Nothing beats the smell of homemade candles. Plus, I get to pretend I’m
              running a luxury spa in my kitchen.
            </li>
            <li>
              <strong>Lego Models:</strong> Forget official sets—I’m all about pasar malam quality knockoffs. As long as I have
              fun building, who cares if it looks… questionable?
            </li>
          </ul>
        </section>

        {/* Coffee Obsession */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Coffee: My True Love</h2>
          <p className="text-gray-700">
            Let’s talk coffee—my other true love. I’m not just talking about drinking it (though I do that a lot). Oh no, I’ve
            gone full nerd on this. I roast my own beans now! There’s something magical about turning raw green beans into
            aromatic brown goodness. Sure, I might burn a batch every now and then, but hey, even coffee needs a bad day
            sometimes.
          </p>
        </section>

        {/* Music Exploration */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Music: My Jam</h2>
          <p className="text-gray-700">
            Music is another big part of my life. I’ve dabbled in guitar and piano, though I wouldn’t say I’m ready for a
            concert anytime soon. But hey, practice makes perfect, right? At least the neighbors haven’t complained yet…
            probably.
          </p>
        </section>

        {/* Reading Habit */}
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-6">Books: My Eco-Friendly Escape</h2>
          <p className="text-gray-700">
            Last but not least, I love reading. Instead of physical books (save the trees!), I download everything onto my
            phone. It’s convenient, eco-friendly, and perfect for late-night reading sessions. Plus, carrying a library in my
            pocket feels like having superpowers.
          </p>
        </section>
      </div>

      {/* Footer Section */}
      <footer className="mt-12 text-center text-gray-600">
        Thanks for stopping by! If you want to chat about guppies, DIY projects, or coffee roasting, feel free to reach out.
      </footer>
    </div>
  );
};

export default AboutCher;