from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Post
from .serializers import BlogSerializers
from .serializers import ContactSerializer
from django.http import JsonResponse


@api_view(['GET'])

def Blog_list(request):
    posts = Post.objects.all()
    serializer = BlogSerializers(posts, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_contact(request):
    if request.method == 'POST':
        serializer = ContactSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)
    


