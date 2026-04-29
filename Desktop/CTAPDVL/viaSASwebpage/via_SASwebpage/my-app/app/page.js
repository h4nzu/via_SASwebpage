export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-8 space-y-24">
      {/* ... Hero Section remains the same ... */}
      <header className="relative text-center py-24 bg-white/40 border border-black/5 rounded-sm shadow-sm">
        <div className="absolute top-4 right-4 flex gap-2">
          <div className="w-1.5 h-6 bg-brand-pink rounded-full rotate-12"></div>
          <div className="w-1.5 h-6 bg-brand-sage rounded-full -rotate-12"></div>
        </div>
        <h1 className="text-8xl font-bold mb-4 tracking-tighter text-brand-charcoal">SAS1</h1>
        <div className="inline-block bg-brand-pink px-6 py-1 mb-6">
          <span className="text-white uppercase tracking-[0.3em] text-xs font-bold">Self and Society</span>
        </div>
        <p className="font-serif text-4xl italic block text-brand-charcoal">Viasiree Jamandron</p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        {/* Sidebar */}
        <aside id="about" className="lg:col-span-4 space-y-10 scroll-mt-24">
          
          {/* THE UPDATED POLAROID: The entire card now reacts to hover */}
          <div className="polaroid-card bg-white p-4 shadow-xl border-b-8 border-brand-sage cursor-pointer group">
            <div className="aspect-[3/4] relative overflow-hidden bg-neutral-100">
              <img 
                src="/eya.jfif" 
                alt="Viasiree Jamandron"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
            </div>
            <p className="mt-4 text-center font-serif italic text-lg opacity-80 uppercase tracking-widest">
              Get to know me
            </p>
          </div>

          <div className="bg-brand-sage/10 p-8 rounded-sm">
            <h3 className="font-serif text-2xl border-b border-brand-sage/30 pb-3 mb-6">About Me</h3>
            <div className="space-y-4 text-sm">
              <p><b className="uppercase text-[10px] opacity-50 block tracking-widest">Name</b>Viasiree Jamandron</p>
              <p><b className="uppercase text-[10px] opacity-50 block tracking-widest">Age</b>20</p>
              <p><b className="uppercase text-[10px] opacity-50 block tracking-widest">Job</b>Student</p>
              <p><b className="uppercase text-[10px] opacity-50 block tracking-widest">Where I live</b>Cabuyao, Laguna</p>
              <p><b className="uppercase text-[10px] opacity-50 block tracking-widest">Fun facts</b>Coffee person</p>
            </div>
          </div>
        </aside>

        {/* ... Rest of your reflection content ... */}
        <section id="reflections" className="lg:col-span-8 space-y-20 scroll-mt-24 text-justify">
           {/* (Text content preserved from previous versions) */}
           <article className="max-w-none">
            <h2 className="font-serif text-4xl mb-8 border-l-4 border-brand-sage pl-6 italic">Part I & II: Reflection</h2>
            <div className="text-brand-charcoal/90 leading-relaxed space-y-6 text-lg whitespace-pre-wrap">
              <p>
                The lessons and activities from the different modules really helped me understand my “self” in a deeper way, as each module connects on how we see, experiences, and develop ourselves. 
              </p>
            <p></p>
              <p>
I now define myself as something that has been and continues to be shaped by both internal and external factors. I agree with the idea of constructivism, that our “self” is not fixed—it is formed through our individual experiences. My thoughts and emotions influence my decisions, but at the same time, my relationships and social interactions shape how I see myself. From my interviews, I realized that how others perceive me mostly aligns with how I see myself. Personally, it gives me a clearer picture and sense of identity.
            </p>
            <p></p>
              <p>
In terms of biological influences, my physical conditions, such as being asthmatic, has somehow affected my lifestyle choices, especially in sports and activities. However, I am aware of my body and its needs. Although I struggled before with unhealthy habits like extreme calorie restriction and other eating disorders, I am now trying to take better care of myself by slowly changing my mindset and behaviors. 
            </p>
            <p></p>
              <p>
Module 2 also made me reflect on my insecurities. While I am somewhat comfortable with how I look, I still struggle with my weight and comparisons influenced by social media and family expectations. However, I am learning to manage these societal pressures by exposing myself to various self-help content and practicing self-awareness.
            </p>
            <p></p>
              <p>
Today, I see myself as a straightforward, independent, and expressive person. I have developed these traits over time, especially during college, where I learned to handle responsibilities and become more self-reliant. I recognize that I am still in the process of discovering who I am. My experiences, both past and present struggles and challenges, continue to shape my values and beliefs. While I feel somewhat secure, I am still open to growth and change.
    </p>
            <p></p>
              <p>
Lastly, this class made me more aware of my emotional state and coping mechanisms. While I consider myself generally okay, I acknowledge that I still get so overwhelmed at times. My current strategies include sleeping, eating, and spending time with the people I value—which I can still improve.
</p>
            <p></p>
              <p>
Overall, the modules helped me see that my “self” is a blend of biological, psychological, and social factors. My strengths include being empathetic, expressive, and independent. However, my areas for improvement involve stress management, reducing overthinking, and building a healthier relationship with my body. 


              </p>
              
              <blockquote className="bg-white/50 p-8 italic font-serif text-2xl border-l-4 border-brand-pink my-10 shadow-sm text-left">
                "You are what you believe yourself to be" - Paulo Coelho
              </blockquote>

              <p>
                
                After interviewing two people about their impressions of me, I gained an understanding of how they perceive my personality, strengths, and weaknesses, or areas for growth. They described my personality in almost similar terms, such as straightforward, genuine, empathetic, and smart. Honestly, hearing this made me realize that I present myself as someone with a strong personality, yet still capable of being understanding and being there for others. It turns out that one of my outstanding features is my straightforwardness. 
              </p>
            <p></p>
              <p>
                According to them, I am someone who is not afraid to express my thoughts and confront my emotions rather than avoid them. They also stated that one of my abilities is communicating and expressing myself freely, as I tend to be open about what I feel and think, which helps me connect with others. Because of this, they view me as a reliable and supportive person—someone who creates a space where people can feel seen and heard.
              </p>
            <p></p>
              <p>
                In social situations, I was described as approachable and warm. Even if I may seem quiet at first, I become more comfortable with others and engage in conversations once I find common ground. This helped me realize that my social presence is better than what I assume it is. However, they also pointed out that I sometimes focus too much on possible outcomes rather than enjoying the present moment, which is an area I need to work on. I also learned that when I face stress, and I sometimes feel overwhelmed with my emotions.
              </p>
            <p></p>
              <p>
                These interviews helped me see myself in different ways and perspectives. I now understand how my actions and personality affect them, and how I can continue to improve myself.


              </p>
            </div>
          </article>
        </section>
      </div>

      {/* Manifestos section preserved at bottom */}
      <section id="manifestos" className="pt-12 border-t border-black/5 scroll-mt-24 pb-20">
        <h2 className="font-serif text-4xl mb-12 text-center text-brand-charcoal italic underline decoration-brand-sage underline-offset-8">Manifestos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          <div className="p-10 bg-brand-charcoal text-brand-cream rounded-sm shadow-xl transition-transform hover:-translate-y-2 duration-300">
            <h3 className="font-serif text-2xl mb-6 uppercase tracking-tighter border-b border-white/20 pb-2">Personal Manifesto</h3>
            <div className="text-sm opacity-90 flex flex-col gap-y-3 leading-relaxed text-left">
    <p>I am a work in progress.</p>
    <p>I am shaped by my experiences, choices, and relationships.</p>
    <p>I believe that my “self” is ever evolving.</p>
    <p className="mb-4">I choose to grow through every experience, challenge or comfort.</p>

    <p>I value honesty, empathy, and growth.</p>
    <p>These values guide me in how I live my life and relate to others.</p>
    <p className="mb-4">I believe that being true to myself helps create meaningful connections and relationships, as growth comes from both success and failure.</p>

    <p>I believe that all of us are capable of change, as experiences shape who we are and who we will become.</p>
    <p className="mb-4">Therefore, I have the power to respond to life in a way that aligns with who I desire to be.</p>

    <p>I strive to be compassionate, courageous, and resilient.</p>
    <p className="mb-4">I face challenges even when I am afraid, remain calm even if it is hard, and understand my “self” without judgment.</p>

    {/* Bulleted Commitment Section */}
    <div className="space-y-1 mb-4 border-l-2 border-brand-pink pl-4 italic">
      <p>I will express myself honestly, but with kindness.</p>
      <p>I will not let anything, especially fear, stop me from taking opportunities.</p>
      <p>I will treat others with respect and empathy.</p>
      <p>I will learn from my mistakes.</p>
      <p>I will always choose growth.</p>
    </div>

    <p className="opacity-70">My purpose is to grow into a better version of myself while creating meaningful connections with others.</p>
    <p className="opacity-70 mb-4">I want to live a life that is impactful in both small and significant ways.</p>

    <p>I intend to live mindfully.</p>
    <p>I intend to be present and appreciate the present moment.</p>
    <p className="mb-4">I intend to build a healthier relationship with myself.</p>

    <p>I aim to become more emotionally balanced.</p>
    <p>I aim to develop healthier coping mechanisms.</p>
    <p>I am to improve my self-confidence and body image.</p>
    <p className="mb-4">I aim to continue becoming responsible in my decisions.</p>

    <p className="pt-6 mt-4 border-t border-white/10 font-serif italic text-center text-brand-pink">
      "I commit to living life guided by these values, beliefs, and principles. This Personal Manifesto will serve as my reminder that I am not living by chance, but by choice."
    </p>
  </div>
          </div>

          <div className="p-10 bg-white border border-brand-pink rounded-sm shadow-md transition-transform hover:-translate-y-2 duration-300">
            <h3 className="font-serif text-2xl mb-6 uppercase tracking-tighter text-brand-pink border-b border-brand-pink/20 pb-2">
              Health Manifesto
            </h3>
            
            <div className="text-sm text-brand-charcoal/80 flex flex-col gap-y-3 leading-relaxed text-left">
              <p>Health is holistic.</p>
              <p className="mb-4">Taking care of myself is not just a responsibility, but a commitment to living a good life.</p>

              <p className="font-serif italic text-lg text-brand-charcoal mb-4">My body is my home, not my enemy.</p>

              <p>I value balance, self-respect, and self-compassion.</p>
              <p className="mb-4">I understand that being healthy is about sustainability and mindful habits.</p>

              {/* Commitment Section */}
              <div className="space-y-1 mb-4 border-l-2 border-brand-sage pl-4 italic text-brand-charcoal">
                <p>I will treat my body with care and respect.</p>
                <p>I will move away from harmful habits and continue healing my relationship with food.</p>
                <p>I will not compare myself to others. Instead, I will focus on what my body can do.</p>
              </div>

              <div className="space-y-1 mb-4">
                <p>I will find healthier ways to cope with stress.</p>
                <p>I will allow myself to feel emotions without being overwhelmed by them.</p>
                <p>I will practice self-awareness.</p>
                <p>I will seek support when needed and not isolate myself.</p>
              </div>

              <div className="space-y-1 mb-4 text-brand-sage font-medium">
                <p>I will listen to my body’s needs.</p>
                <p>I will rest without guilt.</p>
                <p>I will nourish my body.</p>
                <p>I will take breaks when overwhelmed.</p>
              </div>

              <p>I intend to create a balanced lifestyle where I can function well physically and emotionally.</p>
              <p className="mb-4">I intend to join every moment with my loved ones and engage in activities that bring me peace.</p>

              <p className="pt-6 mt-4 border-t border-brand-pink/10 font-serif italic text-center text-brand-sage">
                "Taking care of myself is a commitment to living a good life."
              </p>
            </div>
          </div>
          
        </div>
      </section>
    </div>
  );
}