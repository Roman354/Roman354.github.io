#ifdef GL_ES
precision mediump float;
#endif

// uniform vec2 u_resolution;
// uniform vec2 u_mouse;
// uniform float u_time;
uniform vec3 uColor;
uniform vec2 uSize;
varying vec2 vTexCoord;

float sdRoundSquare( in vec2 p, in vec2 s, in float r ) 
{
    vec2 q = abs(p)-s+r;
    return min(max(q.x,q.y),0.0) + length(max(q,0.0)) - r;
}

void main() 
{
    vec2 uv = vTexCoord;
    vec2 size = uSize;
    float mn = min(size.x,size.y);
    vec2 st = uv*size/mn;

    //размер прямоугольника
    vec2 si = size/mn*0.5;
    vec2 p = st-si;
    
    float ra = 0.0;//радиус скругления
    float b = 0.06;//толщина границы
    
    float t1 = smoothstep(0.0,0.001,-sdRoundSquare(p,si,ra));
    float t2 = smoothstep(0.0,0.001,-sdRoundSquare(p,si-b,ra-b));
    float t3 = max(0.0,min(1.,sdRoundSquare(p,si-ra,0.0)/(ra-b)));

    // float p1 = 0.208;
    // float p2 = 0.612;
    // float p3 = 1.0;
    float p1 = 0.732;
    float p2 = 0.508;
    float p3 = 1.0;

    float result = p1*(t1-t2) + t2;//+ (1.0-(t1-t2))*mix(p2,p3,1.0-t3);
    // float result = p1*(t1-t2) + (1.0-(t1-t2))*mix(p2,p3,1.0-t3);
    
    vec4 color = vec4(0.0);
         
    color.rgb = uColor*result*t1;
    color.a = t1;
    
    // color = vec4(1.0, 0.0, 0.0 , 0.0);
    gl_FragColor = color;
    
}