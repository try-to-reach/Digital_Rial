document.addEventListener('DOMContentLoaded', function () {
  const POINTS_KEY = 'yU4j2lM9Qb';
  const POINT_PER_CLICK_LEVEL_KEY = 'pointPerClickLevel';
  const ENERGY_RECHARGE_LEVEL_KEY = 'energyRechargeLevel';
  const ENERGY_CAPACITY_LEVEL_KEY = 'energyCapacityLevel';
  const ENERGY_KEY = 'pL8k2sN1Wf';
  const ENERGY_CAPACITY_KEY = 'rZ5j4nT8Hl';
  const ENERGY_RECHARGE_RATE_KEY = 'mP3f9xL7Zs';
  const LAST_VISIT_KEY = 'lastVisitTime';

  let userPoints = parseInt(localStorage.getItem(POINTS_KEY)) || 0;
  let pointPerClickLevel = parseInt(localStorage.getItem(POINT_PER_CLICK_LEVEL_KEY)) || 1;
  let energyRechargeLevel = parseInt(localStorage.getItem(ENERGY_RECHARGE_LEVEL_KEY)) || 1;
  let energyCapacityLevel = parseInt(localStorage.getItem(ENERGY_CAPACITY_LEVEL_KEY)) || 1;
  let energy = parseInt(localStorage.getItem(ENERGY_KEY)) || 300;
  let energyCapacity = parseInt(localStorage.getItem(ENERGY_CAPACITY_KEY)) || 300;
  let energyRechargeRate = parseInt(localStorage.getItem(ENERGY_RECHARGE_RATE_KEY)) || 1;

  const pointsDisplay = document.querySelector('.point');
  const energyDisplay = document.querySelector('.energy');
  const clickableImage = document.querySelector('.clickable');
  const leagueImage = document.querySelector('.img-leage');

  function calculatePointPerClick(level) {
    return level;
  }

  function calculateEnergyRechargeRate(level) {
    return level;
  }

  function calculateEnergyCapacity(level) {
    return 300 + (level - 1) * 100;
  }

  function updateDisplays() {
    pointsDisplay.textContent = `${userPoints}`;
    energyDisplay.textContent = `${energy} / ${energyCapacity}`;
  }

  function rechargeEnergy() {
    if (energy < energyCapacity) {
      energy += energyRechargeRate;
      if (energy > energyCapacity) {
        energy = energyCapacity;
      }
      localStorage.setItem(ENERGY_KEY, energy);
      updateDisplays();
    }
  }

  function rechargeEnergyOffline() {
    const lastVisit = parseInt(localStorage.getItem(LAST_VISIT_KEY)) || Date.now();
    const currentTime = Date.now();
    const timeDiff = currentTime - lastVisit;
    const rechargeAmount = Math.floor(timeDiff / 5000) * energyRechargeRate;

    energy = Math.min(energy + rechargeAmount, energyCapacity);
    localStorage.setItem(ENERGY_KEY, energy);
    localStorage.setItem(LAST_VISIT_KEY, currentTime);
  }

  clickableImage.addEventListener('click', function () {
    if (energy > 0) {
      const pointsEarned = calculatePointPerClick(pointPerClickLevel);
      userPoints += pointsEarned;
      energy -= pointsEarned;
      localStorage.setItem(POINTS_KEY, userPoints);
      localStorage.setItem(ENERGY_KEY, energy);
      updateDisplays();
    } 
  });

  setInterval(rechargeEnergy, 5000);

  energyCapacity = calculateEnergyCapacity(energyCapacityLevel);
  energyRechargeRate = calculateEnergyRechargeRate(energyRechargeLevel);
  localStorage.setItem(ENERGY_CAPACITY_KEY, energyCapacity);
  localStorage.setItem(ENERGY_RECHARGE_RATE_KEY, energyRechargeRate);

  // Recharge energy for offline time when the page loads
  rechargeEnergyOffline();
  updateDisplays();
});
