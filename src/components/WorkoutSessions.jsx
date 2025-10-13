import React from "react";

const WorkoutSessions = () => {
  return (
    <section className="workout_session">
      <div className="wrapper">
        <h1>TOP WORKOUT SESSION</h1>
        <p>
          A well-structured workout session should incorporate a balance of cardio, strength training, and flexibility exercises to support overall fitness goals such as building muscle, losing fat, and improving strength.
        </p>
        <img src="/img5.jpg" alt="workout" />
      </div>
      <div className="wrapper">
        <h1>FITNESS MOTIVATION</h1>
        <p>
          The time you feel discouraged by your lack of motivation to work out, just remember these motivational quotes, while putting in the work to become the best version of yourself. 
        </p>
        <div className="bootcamps">
          <div>
            <h4>“The resistance that you fight physically in the gym and the resistance that you fight in life can only build a strong character.” </h4>
            <p>
              – Arnold Schwarzenegger
            </p>
          </div>
          <div>
            <h4>“Continuous improvement is better than delayed perfection.”</h4>
            <p>
              – Mark Twain

            </p>
          </div>
          <div>
            <h4>“I don’t count my sit-ups. I only start counting when it starts hurting because they’re the only ones that count.”</h4>
            <p>
              –Muhammad Ali
            </p>
          </div>
          <div>
            <h4>“When you have a clear vision of your goal, it’s easier to take the first step toward it.” </h4>
            <p>
              – LL Cool J
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkoutSessions;