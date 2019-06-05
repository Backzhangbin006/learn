[26] 链表  LinkedList 指针

- 算法
- 数据结构  链表
- webpack 跑起来
给定一个链表(实现一个)， 和一个特定值x，对链表进行分隔，使所有小于x的结点都在大于或等于x的结点之前
<!-- 保证原来的顺序不打乱 -->
LinkedList  (n)LinkedListNode
村塾数据可以不连续
头指针head -> next -> node1 -> ..node -> tail ->next = null

<!-- 例子：  head = 1->4->3->2->5->2 x=3 -->
   1->2->2     先在链表中按照顺序查找出小于x的结点
   4->3->5     按照顺序查找出大于或等于x的结点，
   1->2->2->4->3->5

1. 一分为二  结点的特性  val  next
   分为两个链表  next属性， 小的链表next->大链表的头结点
   怎么在组成链表的过程之中
   lowerHeader
   lowerTail
   highHeader
   highTail
   lowerHeader = head  1
   4?  跳过 1->next放开 1->4  1结点 next=null
   1->lowerHeader->next 2 ->2
   4->highHeader->....->5
   while 一下就可以