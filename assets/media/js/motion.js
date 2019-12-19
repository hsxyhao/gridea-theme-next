/* 页面加载动画设计，本页代码参考Hexo-NexT源码设计改编
源码链接: https://github.com/iissnan/hexo-theme-next/blob/master/source/js/src/motion.js
*/
let MotionExector = {
  queue: [],
  index: -1,
  add: function(fn) {
    this.queue.push(fn);
    return this;
  },
  next: function() {
    this.index++;
    let fn = this.queue[this.index];
    fn && fn(this);
  },
  start: function() {
    this.next();
  }
}

const Element_Class = {
  title: '.brand',
  subTitle: '.subtitle',
  navItem: '.nav-item',
  post: '.post',
  tagYear: '.tag-year',
  tagNode: '.tag-archive-node',
  tagPostNode: '.tag-post-node',
  cloudTags: '.cloud-tag'
}

let titleMotion = function(MotionExector) {
  let title = document.querySelector(Element_Class.title);
  let subTitle = document.querySelector(Element_Class.subTitle);

  let sequence = [];
  sequence.push({
    e: title,
    p: {
      opacity: 1,
      top: 0
    },
    o: {
      duration: 200
    }
  })
  sequence.push({
    e: subTitle,
    p: {
      opacity: 1,
      top: 0
    },
    o: {
      duration: 200,
      complete: function() {
        MotionExector.next();
      }
    }
  })
  window.Velocity.RunSequence(sequence);
}

let menuMotion = function(MotionExector) {
  let menus = document.querySelectorAll(Element_Class.navItem);

  window.Velocity(menus, 'transition.slideDownIn', {
    display: null,
    duration: 200,
    complete: function () {
      MotionExector.next();
    }
  })
}

let postListMotion = function(MotionExector) {
  let posts = document.querySelectorAll(Element_Class.post);

  if (posts.length > 0) {
    window.Velocity(posts ,'transition.slideDownIn', {
      stagger: 100,
      drag: true,
      complete: function() {
        MotionExector.next();
      }
    });
  } else {
    MotionExector.next();
  }
}

let tagPostMotion = function(MotionExector) {
  let tagNodes = document.querySelectorAll(Element_Class.tagPostNode);

  if (tagNodes.length > 0) {
    window.Velocity(tagNodes ,'transition.slideDownIn', {
      stagger: 100,
      drag: true,
      complete: function() {
        MotionExector.next();
      }
    });
  } else {
    MotionExector.next();
  }
}

MotionExector.add(titleMotion)
.add(menuMotion)
.add(postListMotion)
.add(tagPostMotion)
.start();


window.addEventListener('load', function() {
  // 归档页入场动画
  let sequence = [];
  let tagYears = document.querySelectorAll(Element_Class.tagYear);
  let tagNodes = document.querySelectorAll(Element_Class.tagNode);
  if (tagYears && tagYears.length) {
    sequence.push({
      e: tagYears,
      p: 'transition.slideLeftIn'
    });
  }
  if (tagNodes && tagNodes.length) {
    sequence.push({
      e: tagNodes,
      p: 'transition.slideDownIn'
    });
  }
  if (sequence.length > 0) {
    window.Velocity.RunSequence(sequence);
  }
  // 标签页入场动画
  let cloudTags = document.querySelectorAll(Element_Class.cloudTags)
  if (cloudTags && cloudTags.length > 0) {
    sequence = [];
    sequence.push({
      e: cloudTags,
      p: 'transition.expandIn'
    });
    window.Velocity.RunSequence(sequence);
  }
})