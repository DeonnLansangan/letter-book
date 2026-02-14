"use client";
import { Button } from "@/components/ui/button";
import { useRef } from "react";
import HTMLFlipBook from "react-pageflip";

function MyBook() {
  const book = useRef(null);
  return (
    <>
      <HTMLFlipBook
        width={300}
        height={500}
        ref={book}
        className="shadow-2xl"
        style={{ filter: "drop-shadow(0 20px 40px rgba(160, 30, 50, 0.35))" }}
      >
        {/* Cover page */}
        <div className="cover-page" />

        {/* Page 1 */}
        <div className="book-page book-page--right">
          <div className="h-full flex flex-col items-center justify-center gap-6 px-6">
            <div className="heart-ornament">♥</div>
            <h1 className="cover-title">Happy Valentine&apos;s Day</h1>
            <div className="heart-ornament heart-ornament--small">♥ ♥ ♥</div>
          </div>
        </div>

        {/* Page 2 */}
        <div className="book-page book-page--left">
          <div className="page-content">
            <p className="salutation">Hi loveeee</p>
            <p className="body-text mt-4">
              Happy Valentine&apos;s Dayyyy. Pang-ilang valentine&apos;s na
              natin ito grabi. But it&apos;s officially our first
              valentine&apos;s as working adults! (Mah ghash tumatanda na talaga
              tayo huhu).
            </p>
          </div>
          <div className="page-number">2</div>
        </div>

        {/* Page 3 */}
        <div className="book-page book-page--right">
          <div className="page-content">
            <p className="body-text">
              As usual, I just want to say thank you for being there for me. I
              really appreciate everything. From the gifts, the kinds words, and
              just your company in general. You already know this but your
              presence is already more than enough for me. Iba talaga pag kasama
              kita.
            </p>
          </div>
          <div className="page-number">3</div>
        </div>

        {/* Page 4 */}
        <div className="book-page book-page--left">
          <div className="page-content">
            <p className="body-text">
              It&apos;s like the world can strike me down with all its might but
              I know I&apos;ll be fine because you&apos;re with me. I have the
              most wonderful girlfiend (and soon to be wifey WAW engaged na
              yarn) right there to support me. And I plan to do the same for
              you.
            </p>
          </div>
          <div className="page-number">4</div>
        </div>

        {/* Page 5 */}
        <div className="book-page book-page--right">
          <div className="page-content">
            <p className="body-text">
              With this new chapter in our lives, this is usually the era where
              we become full-fledged adults, build the foundation of our
              careers, and become independent. While other couples broke up
              because they stopped growing as individuals (not naming them pero
              na-mention mo narin the other night haha)
            </p>
          </div>
          <div className="page-number">5</div>
        </div>

        {/* Page 6 */}
        <div className="book-page book-page--left">
          <div className="page-content">
            <p className="body-text">
              I feel like we hit the sweet spot naman where we can both grow as
              a couple together and grow as individuals at the same time.
              It&apos;s the perfect balance that makes me confident that we can
              overcome no matter what life throws at us. Kaya as you continue to
              grow in your job sa Cloudstaff and your career in general, I will
            </p>
          </div>
          <div className="page-number">6</div>
        </div>

        {/* Page 7 */}
        <div className="book-page book-page--right">
          <div className="page-content">
            <p className="body-text">
              always be there cheering for you as you soar to greater heights.
              This balance also makes confident that I REALLY have found my
              soulmate, my other half, my endgame. So as we spend another
              valentine&apos;s together, know that this is just one of the many
              valentine&apos;s we&apos;ll spend together until death do us part,
              because I don&apos;t
            </p>
          </div>
          <div className="page-number">7</div>
        </div>

        {/* Page 8 – Final */}
        <div className="book-page book-page--left">
          <div className="page-content">
            <p className="body-text">
              see it any other way. It&apos;s you I want to support in all your
              upcoming achievements and milestones. It&apos;s you who I want
              walking down in the aisle in the most beautiful dress. It&apos;s
              you, it&apos;s always been you, who I want to be my forever
              valentine. I love you, Noela Basilio. Nothing will ever change
              that.
            </p>
            <div className="closing-heart">♥</div>
          </div>
          <div className="page-number">8</div>
        </div>
      </HTMLFlipBook>

      <div className="flex justify-between md:w-full gap-4 mt-8">
        <Button
          className="nav-btn"
          onClick={() => book.current.pageFlip().flipPrev()}
        >
          ← Previous
        </Button>
        <Button
          className="nav-btn"
          onClick={() => book.current.pageFlip().flipNext()}
        >
          Next →
        </Button>
      </div>
    </>
  );
}

export default function Home() {
  return (
    <div className="valentines-bg font-sans">
      {/* Floating hearts decoration */}
      <div className="floating-hearts" aria-hidden="true">
        {["♥", "♡", "♥", "♡", "♥", "♡", "♥", "♡"].map((h, i) => (
          <span key={i} className={`floating-heart fh-${i}`}>
            {h}
          </span>
        ))}
      </div>

      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start mx-auto">
        <MyBook />
      </main>
    </div>
  );
}
