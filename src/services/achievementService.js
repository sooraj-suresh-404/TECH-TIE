const ACHIEVEMENT_TYPES = {
  CHALLENGES_COMPLETED: 'challenges_completed',
  PROJECTS_COLLABORATED: 'projects_collaborated',
  MENTORSHIP_PROVIDED: 'mentorship_provided',
  SUCCESSFUL_MATCHES: 'successful_matches',
  CODE_REVIEWS: 'code_reviews',
  COMMUNITY_ENGAGEMENT: 'community_engagement',
};

class AchievementService {
  constructor() {
    this.listeners = new Set();
  }

  addListener(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notifyListeners(achievement) {
    this.listeners.forEach(callback => callback(achievement));
  }

  async trackProgress(type, value) {
    try {
      // Here you would typically make an API call to update progress
      // For now, we'll simulate it
      const achievement = await this.checkAchievement(type, value);
      if (achievement) {
        this.notifyListeners(achievement);
      }
    } catch (error) {
      console.error('Error tracking achievement progress:', error);
    }
  }

  async checkAchievement(type, value) {
    // Simulate achievement checks
    const thresholds = {
      [ACHIEVEMENT_TYPES.CHALLENGES_COMPLETED]: {
        bronze: 10,
        silver: 25,
        gold: 50,
      },
      [ACHIEVEMENT_TYPES.PROJECTS_COLLABORATED]: {
        bronze: 5,
        silver: 10,
        gold: 20,
      },
      // Add more achievement types and thresholds
    };

    const levels = ['bronze', 'silver', 'gold'];
    const typeThresholds = thresholds[type];
    
    if (!typeThresholds) return null;

    for (const level of levels) {
      if (value >= typeThresholds[level]) {
        return {
          type,
          level,
          value,
          threshold: typeThresholds[level],
        };
      }
    }

    return null;
  }
}

export const achievementService = new AchievementService();
export { ACHIEVEMENT_TYPES }; 