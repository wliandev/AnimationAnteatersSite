---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
layout: frontpage
header:
  image_fullwidth: gQpeWTK.png
widget1:
  title: "Welcome"
  url: /about/
  image: cZrdswF.jpg?1
  text: 'Animation Anteaters is a place and time to learn and collaborate on animation. Animators of all levels are welcome.'
widget2:
  title: "Spring Quarter"
  url: /schedule/
  image: wKNF8bu.png?3
  text: '<b> Weekly meetings are on Mondays 6-8pm at DBH 1423! </b> <br> Drawing sessions are on Tuesdays and Fridays 3-5pm at various locations.'
widget3:
  title: "Our Recent Work"
  url: /gallery/
  text: 'Our most recent project, Making Friends, won Honorable Mention at Zotfest 2018! You can also view our gallery <a href="/gallery/">here.</a>'
  video: '<a href="#" data-reveal-id="videoModal"><img src="https://i.imgur.com/mHh9JRr.png" width="302" height="182" alt=""/></a>'

#  text: 'Watch our demo reel or browse our gallery.'
#  video: '<a href="#" data-reveal-id="videoModal"><img src="https://i.imgur.com/S9LoxLV.jpg" width="302" height="182" alt=""/></a>'

#
# Use the call for action to show a button on the frontpage
#
# To make internal links, just use a permalink like this
# url: /getting-started/
#
# To style the button in different colors, use no value
# to use the main color or success, alert or secondary.
# To change colors see sass/_01_settings_colors.scss
#

callforaction:
  url: https://www.paypal.com/cgi-bin/webscr?cmd=_donations&business=PWCG9BKYRXGZN&lc=US&item_name=Animation%20Anteaters&item_number=AniAnt%20Club%20Fund&currency_code=USD&bn=PP%2dDonationsBF%3adonate%2520button_zpsxvnh45hr%2epng%2ehtml%3aNonHosted
  text: Consider supporting us by donating >
  style: secondary
permalink: /index.html
#
# This is a nasty hack to make the navigation highlight
# this page as active in the topbar navigation
#
homepage: true
---

<div id="videoModal" class="reveal-modal large" data-reveal="">
  <div class="flex-video widescreen vimeo" style="display: block;">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/pyLcI3ti4Sw" frameborder="0" gesture="media" allow="encrypted-media" allowfullscreen></iframe>
  </div>
  <a class="close-reveal-modal">&#215;</a>
</div>
